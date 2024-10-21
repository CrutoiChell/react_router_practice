import s from './Button.module.css'
import hamster from '../../../../assets/Hamster.png'
export default function Button({ coins, setCoins, multiply }) {

  return (
    <>
      <button
        className={s.btn}
        onClick={() => setCoins(coins + multiply)}>
        <img className={s.hamster} src={hamster} alt="Hamster bisness" />
      </button>
    </>
  )
}
