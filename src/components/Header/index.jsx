import { NavLink } from "react-router-dom"
import { routeMain as routePostsPage } from "pages/PostsPage"
import { routeMain as routeAboutPage } from "pages/AboutPage"
import { Nav } from "react-bootstrap"
import ButtonUi from "ui/Button"
import { useEffect} from "react"

const Header = () => {
    useEffect(() => {
        const nav = document?.querySelector('.header__nav')
        const button = document.querySelector('.header__burger') 

        const onClick = (e) => {
            if(e.target === button) {
                nav.classList.add('--isOpen')
            } else {
                nav.classList.remove('--isOpen')
            }
        }

        return document.addEventListener('click', (onClick))
    }, [])

    const handleClose = () => {
        const nav = document?.querySelector('.header__nav')
        nav.classList.remove('--isOpen')
    }     

    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <div className="header__title">
                        <NavLink to="/">POSTS</NavLink>
                    </div>
                    <Nav className="header__nav nav">
                        <NavLink className="header__link" to={routePostsPage()}>Главная</NavLink>
                        <NavLink className="header__link" to={routeAboutPage()}>Обо мне</NavLink>
                        <ButtonUi className="header__button-close" onClick={handleClose} description='Закрыть'/>
                    </Nav>
                    <div className="header__burger-container">
                        <ButtonUi className='header__burger' description={<span></span>}/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header