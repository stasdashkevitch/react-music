import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Playlists = () => {
    const {playlists} = useSelector(state => state);
    
    const items = playlists.map((item, i) => {
        return (
            <div className="cards container" key={i}>
            <div className="post">
                <div className="MusicCard">
                    <div className="imgMusic">
                        <img src={item.images[0].url} alt=""/>
                    </div>
                </div>
                <div className="MusicNameAuthor">
                    <h4 className="musicName">{item.name}</h4>
                    <p className="musicAuthor">{item.description}</p>
                </div>
            </div>

            <div className="timeHeartRight">
                <div className="time">
                    <p className="timeText">количество треков {item.tracks.total}</p>
                </div>
            </div>
        </div>
        )
    })

    return(
        <>
            {items}
        </>
    )
}

export default Playlists;