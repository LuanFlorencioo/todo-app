import { ButtonHTMLAttributes } from 'react'

interface HeaderSwitcherThemeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconPath: string
}

export default function HeaderSwitcherTheme({
  iconPath,
  ...rest
}: HeaderSwitcherThemeProps) {
  return (
    <button className="w-max h-max p-1" {...rest}>
      <img src={iconPath} alt="Icon" />
    </button>
  )
}
