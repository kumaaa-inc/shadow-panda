# @shadow-panda/preset

## 0.7.0

### Minor Changes

- 72d0a05: Updated dependencies

## 0.6.0

### Minor Changes

- 01fade4: Renamed `tableContainerStyles` and `tableStyles` to `typographyTableContainer` and `typographyTable` respectively.
- 01fade4: `Alert`, `Card`, `Table`, `Form` components now uses the normal config recipe instead of slot recipes. The main purpose of this is to avoid the `'use client'` directive (except for the `Form` which uses the context from `react-hook-form`, but the styles can be reused in forms like the [server-only forms from Next.js](https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations#server-only-forms)).

## 0.5.0

### Minor Changes

- fa2b188: Support `Toggle` component
- 5c29f32: Improved `Form` component to use slot recipes for better style overrides
- e773343: Support `DataTable` component
- 75e945d: Changed destructive color in dark mode for better contrast
- ed0081f: Support `NavigationMenu` component

### Patch Changes

- fa2b188: Fix cursor style for `Accordion` and `Dialog` close button

## 0.4.0

### Minor Changes

- c2f701f: Support `Skeleton` component
- e1ff788: Support `Table` component
- 797b99e: Support `Progress` component
- 4d9670b: Support `Slider` component
- e1ff788: (BREAKING) Renamed `tableContainer` and `table` recipes to `typographyTableContainer` and `typographyTable`, due to recipe created for the `Table` component

## 0.3.0

### Minor Changes

- ba2b385: Support `HoverCard` component
- 42d35ab: Support `Tooltip` component
- ffdd964: Support `Toast` component
- 2ce0557: Support `Menubar` component

## 0.2.0

### Minor Changes

- 7b3bc0d: Support `ScrollArea` component
- 859f080: Support `ContextMenu` component
- b5009c9: Update dependencies
- 490efbc: Support `Sheet` component
- cd52021: Migrate most of the recipes to slot recipes, and wrap all components with `styled()` so we can use css props.
- cd52021: Update dependencies
- 7b3bc0d: Support `Tabs` component
- 34d7fdb: Fix button text color on iOS

## 0.1.0

### Minor Changes

- 43bf25d: Support `AlertDialog` component
- 76bd66a: Support `AspectRatio` component
- 22d1849: Support `Command` component
- 7344c59: Support `Badge` component
- e81f246: Support `Card` component
- c790ac1: Support `Dialog` component
- 6734da6: Support `RadioGroup` component
- d0985b0: Support `Input` component
- eee251c: Support `DropdownMenu` component
- d19e341: Support `Textarea` component
- 9bb6569: Support `Combobox` component
- f258b5a: Support `DatePicker` component, and fix `Calendar` component styles
- 4317266: Support `Calendar` component
- 383f497: Fix animations and support `Select` component
- c09aba3: Support `Form` component
- 66d1170: Support `Avatar` component
- 71e04c1: Support `Switch` and `Separator` components
- 7922a8e: Support `Popover` component
- 899779c: Support `Collapsible` component
- 335a591: Support `Label` and `Checkbox` components

## 0.1.0-alpha.5

### Minor Changes

- 6734da6: Support `RadioGroup` component
- c09aba3: Support `Form` component

## 0.1.0-alpha.4

### Minor Changes

- 9bb6569: Support `Combobox` component
- f258b5a: Support `DatePicker` component, and fix `Calendar` component styles

## 0.1.0-alpha.3

### Minor Changes

- 22d1849: Support `Command` component
- c790ac1: Support `Dialog` component
- eee251c: Support `DropdownMenu` component
- 7922a8e: Support `Popover` component
- 899779c: Support `Collapsible` component

## 0.1.0-alpha.2

### Minor Changes

- e81f246: Support `Card` component
- d19e341: Support `Textarea` component
- 383f497: Fix animations and support `Select` component
- 71e04c1: Support `Switch` and `Separator` components
- 335a591: Support `Label` and `Checkbox` components

## 0.1.0-alpha.1

### Minor Changes

- 76bd66a: Support `AspectRatio` component
- 7344c59: Support `Badge` component
- d0985b0: Support `Input` component
- 4317266: Support `Calendar` component
- 66d1170: Support `Avatar` component

## 0.1.0-alpha.0

### Minor Changes

- 43bf25d: Support `AlertDialog` component
