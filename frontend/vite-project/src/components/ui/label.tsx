"use client"

import * as React from "react"


import { cva, type VariantProps } from "class-variance-authority"


const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  
    VariantProps<typeof labelVariants>
>


export { Label }