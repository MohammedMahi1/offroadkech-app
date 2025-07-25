import { cva, type VariantProps } from 'class-variance-authority'
import React, { type ReactNode } from 'react'
import { cn } from '../../lib/cn'


const variants = cva(
    [
        "py-4",
        "px-8",
        "rounded-xl",
        "outline-none",
        "cursor-pointer"
    ],
    {
        variants: {
            variant: {
                containe: "bg-white shadow text-black font-semibold",
                outline: "bg-gray-500"
            }
        },
        defaultVariants: {
            variant: 'containe'
        }
    }
)

type ButtonProps = {
    children: ReactNode,
} & React.ComponentProps<"button"> & VariantProps<typeof variants>


const Button = ({ children, className, variant, ...props }: ButtonProps) => {
    return (
        <button className={cn(variants({ variant, className, }))} {...props}>
            {
                typeof children === "string" ?
                    children.toUpperCase() :
                    children
            }
        </button>
    )
}

export default Button