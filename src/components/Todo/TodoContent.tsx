interface TodoContentProps {
  children: React.ReactNode,
}

export default function TodoContent({ children }: TodoContentProps) {
  return (
    <section className="w-full min-h-[364px] bg-light-500 dark:bg-dark-200 rounded-lg flex flex-col justify-between">
      {children}
    </section>
  )
}
