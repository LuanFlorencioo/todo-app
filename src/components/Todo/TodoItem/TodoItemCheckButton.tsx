interface TodoItemCheckButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isCompleted: boolean,
}

export default function TodoItemCheckButton({ isCompleted, ...rest }: TodoItemCheckButtonProps) {
  return (
    <button className="w-5 h-5 rounded-full flex justify-center items-center border border-light-300 dark:border-dark-400 group-data-[completed=true]:gradient group-data-[completed=true]:border-none"
      {...rest}
    >
      {
        isCompleted && (
          <img src="/src/assets/icons/icon-check.svg" alt="Icon Check" />
        )
      }
    </button>
  )
}
