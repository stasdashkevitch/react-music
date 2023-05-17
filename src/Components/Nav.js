import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Nav = () => {
    return(
        <>
            <div className="container">

                <header className="header">
                <div className="header-container">
                    <div className="header-logo">
                        <NavLink to="/" className="logo">ГигаМузыка</NavLink>
                    </div>
                    <div className="header-navbar">
                        <nav id="nav" className="nav">
                            <ul className="nav-list">
                                <li className="nav-item "><NavLink exact to="/">Главная</NavLink></li>
                                <li className="nav-item "><NavLink exact to="/catalog">Каталог</NavLink></li>
                                <li className="nav-item "><NavLink exact to="/profile">Профиль</NavLink></li>
                                <li className="nav-item "><a href="#possibilities">Возможности</a></li>
                                <li className="nav-item "><a href="#sub">Подписка</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="registration">
                        <NavLink to="/login" className="reg">Войти</NavLink>
                    </div>
                </div>
            </header>
            </div>
        </>
    )
}

export default Nav;