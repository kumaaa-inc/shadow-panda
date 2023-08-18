export interface ComponentSourceProps {
  name: string
  file: string
  children: React.ReactNode
}

export const ComponentSource = ({ children }: ComponentSourceProps) => <>{children}</>
