import s from './Input.module.css'
export function Input({ handleAdd, list, setList, edit, setshow, show }) {
    return (
        <div className={s.container}>
            <textarea placeholder='Create a new note...' className={s.input} value={list} onChange={event => setList(event.target.value)} />
            <button className={s.btn} onClick={handleAdd}>{edit ? 'Save' : 'Add'}</button>
            <button className={s.btn} onClick={() => setshow(!show)}>Menu</button>
        </div>
    )
}