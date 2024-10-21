import { Task } from "../Task/Task";
import s from './Tasks.module.css'
export function Tasks({ arr, search, handleDelite, handleEdit, filtredarr }) {

    let res;

    if (search !== '') {
        res = filtredarr.map((item) => (
            <Task
                key={item.id}
                item={item}
                handleDelite={handleDelite}
                handleEdit={handleEdit}
            />
        ));
    } else {
        res = arr.map((item) => (
            <Task
                key={item.id}
                item={item}
                handleDelite={handleDelite}
                handleEdit={handleEdit}
            />
        ));
    }

    return (
        <div className={s.container}>
            {res}
        </div>
    )
}