type TodoItemDeleteButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export default function TodoItemDeleteButton({ ...props }: TodoItemDeleteButtonProps) {
  return (
    <button {...props}>
      <img src="/src/assets/icons/icon-cross.svg" alt="Icon Cross" />
    </button>
  )
}
