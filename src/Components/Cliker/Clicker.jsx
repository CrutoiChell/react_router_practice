import { useState, useEffect } from "react";
import Button from "./Components/Button/Button";
import Menu from "./Components/Menu/Menu";
import s from './Clicker.module.css';
import Boroda from '../../assets/Boroda.png'
import dancer from '../../assets/dancer.gif'
export function Clicker() {
  const [info, setInfo] = useState({
    user: 'abobus',
    multiply: 1,
    coins: 0,
    speedAutoCliker: 5000,
  });

  const [purchases, setPurchases] = useState({
    autoClicker: false,
    cardN1: false,
    cardN2: false,
    cardN3: false,
  });

  const [coins, setCoins] = useState(info.coins);
  const [multiply, setMultiply] = useState(info.multiply);

  const message = coins >= 100 ? 'Поздравляю вы собрали свои первые 100 монет' : '';

  useEffect(() => {
    if (purchases.autoClicker) {
      setInterval(() => {
        setCoins(prevCoins => prevCoins + 1 * multiply);
      }, info.speedAutoCliker);
    }
  }, [purchases.autoClicker, multiply, info.speedAutoCliker]);

  function handleAutoClicker() {
    if (coins >= 10) {
      setCoins(coins - 10);
      setPurchases(prevInfo => ({ ...prevInfo, autoClicker: true }));
    }
  }

  function handleMultiply() {
    if (coins >= 5) {
      setMultiply(multiply + 1);
      setCoins(coins - 5);
    }
  }

  function handleCardPurchase(card) {
    if (coins >= card.cost) {
      setCoins(coins - card.cost);
      setPurchases(prevInfo => ({ ...prevInfo, [card.key]: true }));
      setInfo(prevInfo => ({
        ...prevInfo,
        speedAutoCliker: prevInfo.speedAutoCliker - card.speedBoost,
      }));
    }
  }

  const buyButtonProps = [
    {
      key: 'autoClicker',
      purchased: purchases.autoClicker,
      func: handleAutoClicker,
      text: 'Автокликер',
      cost: 10,
      img: Boroda,
      name: 'Какой-то Бородатый чел',
      discription: 'Неизветно кто это или что это, но у него есть борода'
    },
    {
      key: 'cardN1',
      purchased: purchases.cardN1,
      func: () => handleCardPurchase({ key: 'cardN1', cost: 5, speedBoost: 200 }),
      text: 'Карта +1 к скорости',
      cost: 5,
      img: dancer,
      name: 'Гипноденсер',
      discription: 'Hypnodancer hey, hey Hypnodancer hey, hey Hypnodancer hey, hey Go hypnodancer Dancer hey, hey Hypnodancer hey, hey Hypnodancer hey, hey Go hypnodancer',
    },
    {
      key: 'cardN2',
      purchased: purchases.cardN2,
      func: () => handleCardPurchase({ key: 'cardN2', cost: 15, speedBoost: 400 }),
      text: 'Карта +2 к скорости',
      cost: 15,
    },
    {
      key: 'cardN3',
      purchased: purchases.cardN3,
      func: () => handleCardPurchase({ key: 'cardN3', cost: 30, speedBoost: 600 }),
      text: 'Карта +3 к скорости',
      cost: 30,
    },
    {
      purchased: false,
      func: handleMultiply,
      text: 'Увеличить множитель',
      cost: 5,
    },
  ].filter(item => !item.purchased);

  return (
    <main className={s.main}>
      <h1>Mgok Combat</h1>
      <h3>Монеты: {coins}</h3>
      <Menu
        coins={coins}
        purchases={purchases}
        buyButtonProps={buyButtonProps}
      />
      <Button
        multiply={multiply}
        coins={coins}
        setCoins={setCoins}
      />
    </main>
  );
}



