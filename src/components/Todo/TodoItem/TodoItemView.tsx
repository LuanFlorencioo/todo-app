interface TodoItemViewProps {
  children: React.ReactNode,
  isCompleted: boolean,
}

export default function TodoItemView({ children, isCompleted }: TodoItemViewProps) {
  return (
    <div className="w-max flex items-center gap-3 group"
      data-completed={isCompleted}
    >
      {children}
    </div>
  )
}
