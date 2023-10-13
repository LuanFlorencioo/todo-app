interface TodoListProps {
  children: React.ReactNode,
}

export default function TodoList({ children }: TodoListProps) {
  return (
    <ul className="w-full min-h-[52px] flex flex-col divide-y-2 divide-light-300 dark:divide-dark-300">
      {children}
    </ul>
  )
}
