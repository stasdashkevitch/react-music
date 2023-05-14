import mainPhoto from '../../resources/img/mainphoto.png';

const MainDescription = () => {
    return (
        <>
            <section id="mainarea">
                <div className="container100">
                    <div className="banner">
                        <h2 className="text1">ГигаМузыка - стриминговый сервис нового поколения</h2>
                        <p className="text2">Самый передовой стриминговый сервис с ежедневным охватом более 10 млн пользователей</p>
                        <div className="registration111">
                            <a href="#" className="registrationBtn">Регистрация</a>
                        </div>
                    </div>
                </div>
                <div className="banner-img"><img src={mainPhoto} alt="rgtdf"/></div>
            </section>
        </>
    )
}

export default MainDescription;