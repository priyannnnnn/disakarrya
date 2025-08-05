"use client"

import * as React from "react"

// Simple cn function if you don't have one
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

interface RadioGroupContextType {
  value?: string
  onValueChange?: (value: string) => void
  name?: string
}

const RadioGroupContext = React.createContext<RadioGroupContextType>({})

interface RadioGroupProps {
  value?: string
  onValueChange?: (value: string) => void
  name?: string
  className?: string
  children: React.ReactNode
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, value, onValueChange, name, children, ...props }, ref) => {
    return (
      <RadioGroupContext.Provider value={{ value, onValueChange, name }}>
        <div
          ref={ref}
          className={cn("grid gap-2", className)}
          role="radiogroup"
          {...props}
        >
          {children}
        </div>
      </RadioGroupContext.Provider>
    )
  }
)
RadioGroup.displayName = "RadioGroup"

interface RadioGroupItemProps {
  value: string
  id?: string
  className?: string
  disabled?: boolean
}

const RadioGroupItem = React.forwardRef<HTMLDivElement, RadioGroupItemProps>(
  ({ className, value, id, disabled, ...props }, ref) => {
    const context = React.useContext(RadioGroupContext)
    
    return (
      <div 
        ref={ref}
        className={cn("relative", className)}
        {...props}
      >
        <input
          type="radio"
          id={id}
          name={context.name}
          value={value}
          checked={context.value === value}
          onChange={() => context.onValueChange?.(value)}
          disabled={disabled}
          className="sr-only"
        />
        <div 
          className={cn(
            "aspect-square h-4 w-4 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer",
            context.value === value && "border-blue-600",
            disabled && "cursor-not-allowed opacity-50"
          )}
          onClick={() => !disabled && context.onValueChange?.(value)}
        >
          {context.value === value && (
            <div className="h-2 w-2 rounded-full bg-blue-600" />
          )}
        </div>
      </div>
    )
  }
)
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }