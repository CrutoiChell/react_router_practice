import s from "./Tasks.module.css";
import { Task } from '../Task/Task'
export function Tasks({ arr, handleDelite, handleEdit, handleTogle, handleTogleCheck, theme }) {

    return (
        <ul className={s.container}>
            {
                arr.map((item) => (
                    <Task
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        isEdit={item.isEdit}
                        isChecked={item.isChecked}
                        handleDelite={handleDelite}
                        handleTogle={handleTogle}
                        handleEdit={handleEdit}
                        handleTogleCheck={handleTogleCheck}
                        theme={theme}
                    />
                ))
            }
        </ul >
    )
}

