export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="flex-col shadow-shadow border-2 relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-border bg-fuchsia-300 text-foreground font-base">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, index) => (
          <span key={index} className="mx-4">
            {item}
          </span>
        ))}
      </div>
      {/* must have both of these in order to work */}
    </div>
  )
}
