interface TodoItemRootProps {
  children: React.ReactNode;
}

export default function TodoItemRoot({ children }: TodoItemRootProps) {
  return (
    <li className="w-full h-[52px] sm:h-16 px-5 py-4 flex justify-between items-center">
      {children}
    </li>
  )
}
