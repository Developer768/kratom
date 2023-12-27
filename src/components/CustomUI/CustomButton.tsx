import { VariantProps, cva } from 'class-variance-authority'
import React from 'react'
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { Loader2, MoveRight } from 'lucide-react';

const buttonVariants = cva(
    "rounded-full py-[13px] px-[35px] text-[20px] font-bold h-auto",
    {
        variants: {
            variant: {
                default: "bg-lightGreen hover:bg-lightestGreen text-white",
                white: "bg-white hover:bg-lightestGreen text-green hover:text-white",
                blackOutline: "bg-white  hover:bg-lightestGreen text-green hover:text-white border border-black",
                whiteOutline: "bg-transparent hover:bg-white text-white hover:text-green border border-white"
            },
            width: {
                default: "w-fit",
                full: "w-full"
            }
        },
        defaultVariants: {
            variant: "default",
            width: "default"
        }
    }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    isLoading?: boolean;
    arrowed?: boolean;
}

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({className, children, variant, width, arrowed, isLoading, ...props}, ref) => {
  return (
    <Button className={cn(buttonVariants({variant,width,className}))} ref={ref} disabled={isLoading} {...props}>
        {isLoading ? <Loader2 className='mr-2 h-5 w-5 animate-spin'/> : null}
        {children}
        {arrowed ? <MoveRight className='ml-3 h-5 w-5' /> : null}
    </Button>
  )
}
)

export default CustomButton