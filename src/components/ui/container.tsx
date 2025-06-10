import React, { useRef, type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'


type ContainerProps = {
    children:ReactNode,
} & React.ComponentProps<"div"> 
const Container = ({children,className,...props}:ContainerProps) => {
  return (
    <div className={twMerge("px-20",className)} {...props}>
        {children}
    </div>
  )
}

export default Container