interface TodoItemTitleProps {
  title: string
}

export default function TodoItemTitle({ title }: TodoItemTitleProps) {
  return (
    <p className="text-xs sm:text-lg text-light-100 dark:text-dark-600 group-data-[completed=true]:line-through group-data-[completed=true]:text-light-300 dark:group-data-[completed=true]:text-dark-400">
      {title}
    </p>
  )
}
