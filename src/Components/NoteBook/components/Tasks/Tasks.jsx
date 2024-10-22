import { Task } from "../Task/Task";
import s from './Tasks.module.css'
export function Tasks({ arr, search, handleDelite, handleEdit, filtredarr, theme }) {

    let res = search !== '' ? [...filtredarr] : [...arr];

    return (
        <div className={s.container}>
            {res.map((item) => <Task key={item.id} item={item} handleDelite={handleDelite} handleEdit={handleEdit} theme={theme} />)}
        </div>
    )
}