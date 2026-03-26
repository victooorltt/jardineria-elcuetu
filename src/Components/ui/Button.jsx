import React from "react"

const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition-colors ${className}`}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }