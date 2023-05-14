const Navigation = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" id="HeaderMobile">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <h2 className="logo" >ГигаМузыка</h2>
                    </a>
                    <button className="navbar-toggler" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link ">Главная</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Возможности</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Подписка</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Войти</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation;