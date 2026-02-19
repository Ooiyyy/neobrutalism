import { useEffect, useRef } from "react"
import { ScrollArea } from "../scroll-area"

export function AutoScrollArea({ children }: { children: React.ReactNode }) {
  const viewportRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return

    const interval = setInterval(() => {
      el.scrollTo({
        top: el.scrollHeight,
        behavior: "smooth",
      })
    }, 300)

    return () => clearInterval(interval)
  }, [])

  return (
    <ScrollArea className="h-full">
      <div ref={viewportRef} className="p-4">
        {children}
      </div>
    </ScrollArea>
  )
}
