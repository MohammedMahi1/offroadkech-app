import React, { type ReactNode } from 'react'


type ContainerProps = {
    children:ReactNode
} & React.ComponentProps<"div">
const Container = ({children}:ContainerProps) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default Container