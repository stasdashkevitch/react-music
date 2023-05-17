const Tracks = () => {
    return(
        <>
            <div className="cards container">
                <div className="post">
                    <div className="MusicCard">
                        <div className="imgMusic">
                            <img src="img/alexander-shatov-qt7S2QuAhJI-unsplash 1.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="MusicNameAuthor">
                        <h4 className="musicName">Never broke again</h4>
                        <p className="musicAuthor">XXXManera</p>
                    </div>
                </div>

                <div className="timeHeartRight">
                    <div className="time">
                        <p className="timeText">Дата релиза </p>
                        <p className="dateTime">04.05.2023</p>
                        <i className="fa-solid fa-heart"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tracks;