interface TodoRootProps {
  children: React.ReactNode,
}

export default function TodoRoot({ children }: TodoRootProps) {
  return (
    <main className="w-full max-w-[550px] flex flex-col gap-3">
      {children}
    </main>
  )
}
