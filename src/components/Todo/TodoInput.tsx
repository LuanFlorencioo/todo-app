import { InputHTMLAttributes } from 'react'

type TodoInputProps = InputHTMLAttributes<HTMLInputElement>

export default function TodoInput({ ...props }: TodoInputProps) {
  return (
    <section className="w-full h-[52px] sm:h-16 sticky top-10">
      <input
        {...props}
        className="w-full h-full pl-[52px] pr-8 py-5 bg-light-500 dark:bg-dark-200 rounded-lg text-xs sm:text-lg text-light-100 dark:text-dark-600 placeholder-shown:text-light-200 dark:placeholder:text-dark-500 outline-none"
      />

      <span className="w-5 h-5 border rounded-full border-light-300 dark:border-dark-400 absolute left-5 top-1/2 -translate-y-1/2" />
    </section>
  )
}
