import { create } from "zustand";
import { states, type ThemeStates } from "./theme.states";

interface ThemeStore extends ThemeStates {
  actions: {
    changeTheme: (theme: 'dark' | 'light') => void;
    recoverThemeData: () => void;
  };
}

export const themeStore = create<ThemeStore>()((set) => ({
  ...states,
  actions: {
    changeTheme: (theme) => {
      theme === 'dark'
        ? document.body.classList.add('dark')
        : document.body.classList.remove('dark')
      localStorage.setItem("TODO APP - theme", JSON.stringify(theme))
      set(() => ({ theme }))
    },
    recoverThemeData: () => {
      const themeData = localStorage.getItem('TODO APP - theme')
      if (themeData) {
        if (JSON.parse(themeData) === "dark") {
          document.body.classList.add("dark")
          set(() => ({ theme: "dark" }))
        }
        else {
          set(() => ({ theme: "light"}))
        }
      }
      else {
        const isUserDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        if (isUserDarkTheme) {
          document.body.classList.add("dark")
          set(() => ({ theme: "dark" }))
        }
      }
    }
  }
}))