import s from './Checkbox.module.css'

export const Checkbox = ({ isChecked, handleTogleCheck, id }) => {
  return (<>
    <input
    id={id + '!'}
      type="checkbox"
      className={s.checkboxElement}
      checked={isChecked}
      onChange={() => handleTogleCheck((id))}
    />
    <label htmlFor={id + '!'} className={s.checkboxWrapper}></label>
  </>

  );
};