import { twclsx } from "@/utils/twClsx"

import { createElement } from "react"

export const UnstyledButton = ({ children, className, ...props }) => {
  return createElement(
    "button",
    {
      ...props,
      className: twclsx("inline-flex items-center justify-center", className),
    },
    children,
  )
}