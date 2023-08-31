'use client'

import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { Slot } from '@radix-ui/react-slot'
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from 'react-hook-form'
import { styled } from '@shadow-panda/styled-system/jsx'
import { css, cx } from '@shadow-panda/styled-system/css'
import {
  formLabel,
  formItem,
  formControl,
  formDescription,
  formMessage,
} from '@shadow-panda/styled-system/recipes'
import { Label } from '@/components/ui/label'

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

type FormItemContextValue = {
  id: string
}

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue)
const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue)

export const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

const BaseFormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => (
  <FormFieldContext.Provider value={{ name: props.name }}>
    <Controller {...props} />
  </FormFieldContext.Provider>
)

const BaseFormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const id = React.useId()

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} {...props} />
      </FormItemContext.Provider>
    )
  },
)
BaseFormItem.displayName = 'FormItem'

const BaseFormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
      className={cx(error && css({ color: 'destructive' }), className)}
      htmlFor={formItemId}
      {...props}
    />
  )
})
BaseFormLabel.displayName = 'FormLabel'

const BaseFormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  )
})
BaseFormControl.displayName = 'FormControl'

const BaseFormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>((props, ref) => {
  const { formDescriptionId } = useFormField()

  return <p ref={ref} id={formDescriptionId} {...props} />
})
BaseFormDescription.displayName = 'FormDescription'

const BaseFormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <p ref={ref} id={formMessageId} {...props}>
      {body}
    </p>
  )
})
BaseFormMessage.displayName = 'FormMessage'

export const Form = FormProvider
export const FormField = BaseFormField
export const FormLabel = styled(BaseFormLabel, formLabel)
export const FormItem = styled(BaseFormItem, formItem)
export const FormControl = styled(BaseFormControl, formControl)
export const FormDescription = styled(BaseFormDescription, formDescription)
export const FormMessage = styled(BaseFormMessage, formMessage)
