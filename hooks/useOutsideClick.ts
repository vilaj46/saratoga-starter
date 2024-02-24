import React from "react"

export const useOutsideClick = <T extends HTMLDivElement>(callback: () => void) => {
  const ref = React.useRef<T>(null)

  React.useEffect(() => {
    const handleClick = (event) => {
      console.log(ref.current)
      if (ref.current && !ref.current?.contains(event.target)) {
        callback()
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [ref])

  return ref
}