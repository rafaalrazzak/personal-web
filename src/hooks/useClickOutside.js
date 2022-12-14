import { useEffect } from 'react'

/**
 * It adds a listener to the document that will call the handler function if the user clicks outside of
 * the element that the refObject is attached to
 * @param refObject - React.RefObject<T>
 * @param {Handler} handler - The function that will be called when the user clicks outside of the
 * element.
 */
export const useClickOutside = (
  /* A React.RefObject<T> that is used to attach a ref to a React element of type T. */
  refObject,
  handler
) => {
  useEffect(() => {
    /**
     * If the event target is not the element that the event listener is attached to, and the event
     * target is not a child of the element that the event listener is attached to, and the event target
     * is not a button with aria-haspopup, then call the handler function.
     * @param {Event} e - Event - The event object
     * @returns The return value of the function is the function itself.
     */
    const listener = (e) => {
      const el = refObject?.current

      if (!el || el.contains(e.target) || e.target.ariaHasPopup) {
        return
      }

      handler(e)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    /* upon unmounting, removes the event listeners. */
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [handler, refObject])
}
