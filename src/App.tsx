import { useEffect, useState } from 'react'
import { AppContainer, Header, Todo } from './components'
import { themeStore, todoStore } from './stores'
import iconSun from './assets/icons/icon-sun.svg'
import iconMoon from './assets/icon/icon-moon.svg'

export default function App() {
  const [inputValue, setInputValue] = useState('')
  const {
    theme,
    actions: { changeTheme, recoverThemeData },
  } = themeStore()

  const {
    todos,
    actions: {
      createNewTodo,
      deleteTodo,
      toggleCheckTodo,
      recoverTodosData,
    },
  } = todoStore()

  useEffect(() => {
    recoverThemeData()
    recoverTodosData()
  }, [])

  const submitNewTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.length > 0) {
      createNewTodo({
        id: (todos.length > 0 ? Math.max(...todos.map(({id}) => id)) : 0) + 1,
        isCompleted: false,
        title: inputValue,
      })
      e.currentTarget.value = ''
    }
  }

  return (
    <AppContainer>
      <Header.Root>
        <Header.Logo />
        <Header.SwitcherTheme
          iconPath={theme === "dark" ? iconSun : iconMoon}
          onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}
        />
      </Header.Root>

      <Todo.Root>
        <Todo.Input
          type='text'
          placeholder="Create a new todo..."
          maxLength={36}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={submitNewTodo}
        />


        <Todo.Content>
          <Todo.List>
            {
              todos.map((todo) => (
                <Todo.Item.Root key={todo.id}>
                  <Todo.Item.View isCompleted={todo.isCompleted}>
                    <Todo.Item.CheckButton
                      isCompleted={todo.isCompleted}
                      onClick={() => toggleCheckTodo(todo.id)}
                    />

                    <Todo.Item.Title title={todo.title} />
                  </Todo.Item.View>

                  <Todo.Item.DeleteButton onClick={() => deleteTodo(todo.id)} />
                </Todo.Item.Root>
              ))
            }
          </Todo.List>
        </Todo.Content>
      </Todo.Root>
    </AppContainer>
  )
}
