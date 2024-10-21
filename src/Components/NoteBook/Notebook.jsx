import { useState } from 'react'
import s from './Notebook.module.css'
import { randomId } from './helpers/random';
import { Tasks } from './components/Tasks/Tasks';
import { Input } from './components/Input/input';
export function Notebook() {
  const [list, setList] = useState('');
  const [arr, setArr] = useState([
    {
      id: randomId(), show: false, text: 'The sun is shining brightly today'
    },
    {
      id: randomId(), show: false, text: 'Life is a beautiful adventure'
    }
  ])
  const [edit, setEdit] = useState(null)
  const [show, setshow] = useState(false)
  const [search, setsearch] = useState('')

  function handleAdd() {
    if (list.trim()) {
      if (edit !== null) {
        let res = arr.map(item => item.id === edit.id ? { ...item, text: list } : item)
        setArr(res)
        setEdit(null)
        setList('')
        setsearch('')
      } else {
        setArr([...arr, { id: randomId(), show: false, text: list },])
        setList('')
      }
    }
  }

  function handleEdit(item) {
    setList(item.text);
    setEdit(item)
  }

  function handleDelite(item) {
    let copy = arr.filter(elem => elem !== item)
    setArr(copy)
  }

  let filtredarr = arr.filter(item => item.text.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <main className={s.container}>
        <h1>NOTEBOOK</h1>
        <div className={s.inputs}>
          <Input
            list={list}
            edit={edit}
            setList={setList}
            handleAdd={handleAdd}
            setshow={setshow}
            show={show}
          />
          {show ?
            <input
              className={s.input}
              placeholder='Enter the note you want to find...'
              value={search}
              onChange={event => setsearch(event.target.value)} />
            : <></>}

        </div>

        {show ?
          <Tasks
            arr={arr}
            search={search}
            filtredarr={filtredarr}
            handleDelite={handleDelite}
            handleEdit={handleEdit}
          /> :
          <></>
        }
      </main>
    </>
  )
}

