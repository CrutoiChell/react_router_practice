import { useState } from 'react'
import s from './Todo.module.css'
import { randomId } from '../../helpers/random'
import { Tasks } from './Components/Tasks/Tasks';
import { Input } from './Components/Input/Input';
import { useLoaderData } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
// localStorage.clear()

export let loader = async () => {
  let arrStore = JSON.parse(localStorage.getItem('arr')) || [];
  return arrStore
};


export function Todo() {
  const arrStore = useLoaderData();
  const [list, setList] = useState('');
  const [arr, setArr] = useState(arrStore)
  const theme = useOutletContext();

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
      <section className={s.container}>
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
      </section>
    </>
  )
}

