import { useState } from 'react'
import s from './Notebook.module.css'
import { randomId } from '../../helpers/random'
import { Tasks } from './components/Tasks/Tasks';
import { Input } from './components/Input/input';
import { useLoaderData, useOutletContext } from 'react-router-dom';

export let loader = async () => {
  let arrNotebook = JSON.parse(localStorage.getItem('arrNotebook')) || [];
  let showStore = JSON.parse(localStorage.getItem('show')) || false;
  return { arrNotebook, showStore }
};


export function Notebook() {
  let { arrNotebook, showStore } = useLoaderData()
  const [list, setList] = useState('');
  const [arr, setArr] = useState(arrNotebook)
  const [edit, setEdit] = useState(null)
  const [show, setShow] = useState(showStore)
  const [search, setsearch] = useState('')
  const theme = useOutletContext();

  function handleAdd() {
    if (list.trim()) {
      if (edit !== null) {
        let res = arr.map(item => item.id === edit.id ? { ...item, text: list } : item)
        let str = JSON.stringify(res)
        localStorage.setItem('arrNotebook', str)
        setArr(res)
        setEdit(null)
        setList('')
        setsearch('')
      } else {
        let res = [...arr, { id: randomId(), text: list }]
        let str = JSON.stringify(res)
        localStorage.setItem('arrNotebook', str)
        setArr(res)
        setList('')
      }
    }
  }

  function saveShow() {
    let res = !show
    setShow(res)
    let str = JSON.stringify(res)
    localStorage.setItem('show', str)
  }

  function handleEdit(item) {
    setList(item.text);
    setEdit(item)
  }

  function handleDelite(item) {
    console.log(item);
    let copy = arr.filter(elem => elem !== item)
    setArr(copy)
    let str = JSON.stringify(copy)
    localStorage.setItem('arrNotebook', str)
  }

  let filtredarr = arr.filter(item => item.text.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <section className={s.container}>
        <h1 className={theme ? s.themeDark : s.themeWhite}>NOTEBOOK</h1>
        <div className={s.inputs}>
          <Input
            list={list}
            edit={edit}
            show={show}
            theme={theme}
            setList={setList}
            handleAdd={handleAdd}
            setShow={setShow}
            saveShow={saveShow}
          />
          {show ?
            <input
              className={theme ? s.Darkinput : s.input}
              placeholder='Enter the note you want to find...'
              value={search}
              onChange={event => setsearch(event.target.value)} />
            : <></>}

        </div>

        {show ?
          <Tasks
            arr={arr}
            search={search}
            theme={theme}
            filtredarr={filtredarr}
            handleDelite={handleDelite}
            handleEdit={handleEdit}
          /> :
          <></>
        }
      </section>
    </>
  )
}

