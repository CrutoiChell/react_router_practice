import s from './BuyButton.module.css';

export function BuyButton({ coins, func, text, cost, img, name, discription }) {
  return (
    <div className={s.card}>
      <img className={s.img} src={img} alt="" />
      <p className={s.name}><b>{name}</b></p>
      <p className={s.discription}>{discription}</p>
      <button
        onClick={func}
        disabled={coins < cost}
        className={s.btn}>
        {text}
      </button>
      <p>стоимость: {cost} монет</p>
    </div>

  );
}
