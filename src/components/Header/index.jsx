import { NavLink } from "react-router-dom"
import { routeMain as routePostsPage } from "pages/PostsPage"
import { routeMain as routeAboutPage } from "pages/AboutPage"
import { Navbar, Nav } from "react-bootstrap"

const Header = () => {
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
                    </Nav>
                </div>
            </div>
        </header>
    )
}

export default Header