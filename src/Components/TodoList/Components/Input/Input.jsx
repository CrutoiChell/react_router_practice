import s from './Input.module.css'
export function Input({ list, setList, handleAdd, theme }) {
    
    return (
        <div className={s.container}>
            <input
                placeholder='Create a new note...'
                className={theme ? s.Darkinput : s.input}
                value={list}
                onChange={event => setList(event.target.value)}
            />
            <button className={s.btn} onClick={handleAdd}> Create </button>
        </div>

    )
}