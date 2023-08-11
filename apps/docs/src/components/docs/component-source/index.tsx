export interface ComponentSourceProps {
  name: string
  children: React.ReactNode
}

export const ComponentSource = ({ children }: ComponentSourceProps) => (
  <>{children}</>
)
