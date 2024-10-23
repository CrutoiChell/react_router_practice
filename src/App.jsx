import { Outlet, useLoaderData } from 'react-router-dom';
import s from './App.module.css'
import { Header } from './Components/Header/Header';
import { useState } from 'react';


export let loader = async () => {
  let themeStore = JSON.parse(localStorage.getItem('theme')) || false;
  return themeStore
};


export function App() {
  const themeStore = useLoaderData()
  const [theme, setTheme] = useState(themeStore)

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
    <section className={s.container}>
      <Header
        theme={theme}
        setTheme={setTheme}
      />
      <Outlet context={theme} />
    </section>
  )
}

