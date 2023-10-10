interface AppContainerProps {
  children: React.ReactNode,
}

export default function AppContainer({ children }: AppContainerProps) {
  return (
    <div className="w-screen min-h-screen px-7 pb-10 bg-light-400 dark:bg-dark-100 transition-colors bg-[url('/src/assets/images/bg-mobile-light.jpg')] dark:bg-[url('/src/assets/images/bg-mobile-dark.jpg')] sm:bg-[url('/src/assets/images/bg-desktop-light.jpg')] sm:dark:bg-[url('/src/assets/images/bg-desktop-dark.jpg')] bg-no-repeat bg-contain flex flex-col items-center">
      {children}
    </div>
  )
}
