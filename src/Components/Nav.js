import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Nav = () => {
    return(
        <>
            <div className="container">

                <header className="header">
                <div className="header-container">
                    <div className="header-logo">
                        <h2 className="logo">ГигаМузыка</h2>
                    </div>
                    <div className="header-navbar">
                        <nav id="nav" className="nav">
                            <ul className="nav-list">
                                <li className="nav-item "><NavLink to="/" className="nav-link">Главная</NavLink></li>
                                <li className="nav-item "><a href="" className="nav-link">Возможности</a></li>
                                <li className="nav-item "><a href="" className="nav-link">Подписка</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="registration">
                        <a href="">Войти</a>
                    </div>
                </div>
            </header>
            </div>
        </>
    )
}

export default Nav;