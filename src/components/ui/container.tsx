import React, { type ReactNode } from 'react'


type ContainerProps = {
    children:ReactNode
} & React.ComponentProps<"div">
const Container = ({children}:ContainerProps) => {
  return (
    <div className='px-40'>
        {children}
    </div>
  )
}

export default Container