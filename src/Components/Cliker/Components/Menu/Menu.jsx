import s from './Menu.module.css';
import { BuyButton } from '../BuyButton/BuyButton';

export default function Menu({ coins, buyButtonProps }) {
  return (
    <div className={s.container}>
      {buyButtonProps.map(({ key, func, text, cost, img, name, discription }) => (
        <BuyButton
          key={key}
          coins={coins}
          func={func}
          text={text}
          cost={cost}
          img={img}
          name={name}
          discription={discription}
        />
      ))}
    </div>
  );
}