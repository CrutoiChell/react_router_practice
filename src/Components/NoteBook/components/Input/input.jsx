import s from './Input.module.css'
export function Input({ handleAdd, list, setList, edit,theme, saveShow }) {
    return (
        <div className={s.container}>
            <textarea
                placeholder='Create a new note...'
                className={theme ? s.Darkinput : s.input}
                value={list}
                onChange={event => setList(event.target.value)} />
            <button
                className={s.btn}
                onClick={handleAdd}>
                {edit ? 'Save' : 'Add'}
            </button>
            <button
                className={s.btn}
                onClick={saveShow}>
                Menu
            </button>
        </div>
    )
}