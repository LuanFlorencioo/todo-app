interface HeaderRootProps {
  children: React.ReactNode
}

export default function HeaderRoot({ children }: HeaderRootProps) {
  return (
    <header className="w-full max-w-[550px] pt-12 pb-8 flex justify-between items-center">
      {children}
    </header>
  )
}
