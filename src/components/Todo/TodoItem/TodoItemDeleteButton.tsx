import iconCross from './../../../assets/icons/icon-cross.svg'

type TodoItemDeleteButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export default function TodoItemDeleteButton({ ...props }: TodoItemDeleteButtonProps) {
  return (
    <button {...props}>
      <img src={iconCross} alt="Icon Cross" />
    </button>
  )
}
