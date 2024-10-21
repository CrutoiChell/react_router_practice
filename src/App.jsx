import { Outlet } from 'react-router-dom';
import s from './App.module.css'
import { Header } from './Components/Header/Header';
import { useState } from 'react';
import { createContext } from 'react';
let nowtheme;

if (localStorage.getItem('theme')) {
  nowtheme = JSON.parse(localStorage.getItem('theme'))
} else {
  nowtheme = false
}

export const themeContext = createContext(nowtheme);

export function App() {

  const [theme, setTheme] = useState(nowtheme)

  if (theme == false) {
    document.body.style.backgroundColor = 'rgb(226, 226, 226)';
    let copy = theme
    let str = JSON.stringify(copy)
    localStorage.setItem('theme', str)
  } else {
    document.body.style.backgroundColor = '#252525';
    let copy = theme
    let str = JSON.stringify(copy)
    localStorage.setItem('theme', str)
  }


  return (
    <main className={s.container}>
      <Header
        theme={theme}
        setTheme={setTheme}
      />
      <Outlet />
    </main>
  )
}

