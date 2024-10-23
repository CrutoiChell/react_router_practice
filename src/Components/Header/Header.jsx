import { Link } from 'react-router-dom'
import s from './Header.module.css'
import logo from '../../assets/logo.svg'
import logo_dark from '../../assets/logo_dark.svg'
import moon from '../../assets/moon.svg'
import Sun from '../../assets/Sun.svg'



export function Header({theme,setTheme}) {

    const links = [
        { id: 1, text: 'TODO LIST', url: 'Todolist' },
        { id: 2, text: 'NOTEBOOK', url: 'Notebook' }
      ];

    return (
        <>
        <img className={s.logo} src={theme ? logo_dark : logo} alt="logo" />
        <nav className={s.container}>
            {links.map((elem, index) => {
                return (
                    <Link to={elem.url} className={theme ? s.linkdark : s.link} key={index}>
                        {elem.text}
                    </Link>
                )
            })}
            <button className={s.theme} onClick={() => setTheme(!theme)}>
                {theme ? <img src={Sun} alt="" /> : <img src={moon} alt="" />}
            </button>
        </nav>        
        </>

    )
}

