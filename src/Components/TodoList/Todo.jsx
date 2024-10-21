import { useContext, useState } from 'react'
import s from './Todo.module.css'
import { randomId } from './helpers/random';
import { Tasks } from './Components/Tasks/Tasks';
import { Input } from './Components/Input/Input';
import { themeContext } from '../../App'
import { useLoaderData } from 'react-router-dom';
// localStorage.clear()

let nowtheme;

if (localStorage.getItem('theme')) {
  nowtheme = JSON.parse(localStorage.getItem('theme'))
} else {
  nowtheme = false
}


export let loader = async () => {
  let arr = JSON.parse(localStorage.getItem('arr'))
  if (arr) {
      return arr
  } 
  return []
}

export function Todo() {
  let arr2 = useLoaderData()
  const [list, setList] = useState('');
  const [arr, setArr] = useState(arr2)
  // const theme = useContext(themeContext)
  const [theme,setTheme] = useState(nowtheme)

  function handleAdd() {
    if (list.trim()) {
      const copy = [...arr, { id: randomId(), text: list, isEdit: false, isChecked: false }]
      setArr(copy)
      const str = JSON.stringify(copy)
      localStorage.setItem('arr', str)
      setList('')
    }
  }

  function handleDelite(id) {
    let copy = arr.filter(elem => elem.id !== id)
    setArr(copy)
    let str = JSON.stringify(copy)
    localStorage.setItem('arr', str)
  }

  function handleTogle(id) {
    let copy = arr
    setArr(copy.map(item => {
      if (item.id === id) {
        item.isEdit = !item.isEdit;
      }
      return item;
    }));
    let str = JSON.stringify(copy)
    localStorage.setItem('arr', str)
  }

  function handleTogleCheck(id) {
    let copy = arr
    setArr(copy.map(item => {
      if (item.id === id) {
        item.isChecked = !item.isChecked;
      }
      return item;
    }));
    let str = JSON.stringify(copy)
    localStorage.setItem('arr', str)
  }

  function handleEdit(id, field, event) {
    let copy = arr
    setArr(copy.map(item => {
      if (item.id === id) {
        item[field] = event.target.value
        setList('')
      }
      return item;
    }));
    let str = JSON.stringify(copy)
    localStorage.setItem('arr', str)
  }

  return (
    <>
      <main className={s.container}>
        <div>
          <h1 className={theme ? s.dark : s.white}>TODO LIST</h1>
        </div>
        <Input
          list={list}
          setList={setList}
          handleAdd={handleAdd}
          theme={theme}
        />
        <Tasks
          arr={arr}
          handleDelite={handleDelite}
          handleTogle={handleTogle}
          handleEdit={handleEdit}
          handleTogleCheck={handleTogleCheck}
          theme={theme}
        />
      </main>
    </>
  )
}

