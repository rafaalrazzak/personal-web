import { useEffect, useState } from 'react'

export const useScroll = () => {
  const [yOffset, setYOffset] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  function handleScroll() {
    const currentYOffset = window.pageYOffset
    const visible = yOffset > currentYOffset
    setYOffset(currentYOffset)

    setVisible(visible)
  }

  return visible
}
