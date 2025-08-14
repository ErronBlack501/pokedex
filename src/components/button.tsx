export default function Button({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <button
      className={`rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 ${className ?? ''}`}
    >
      {children}
    </button>
  )
}
