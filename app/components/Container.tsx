'use client'

interface ContainerProps {
    children: React.ReactNode;
}

const Container:React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[2520] mx-2 px-0 md:px-6 lg:px-20 xl:px-64">
      {children}
    </div>
  )
}

export default Container
