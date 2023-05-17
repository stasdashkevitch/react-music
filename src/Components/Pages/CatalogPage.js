import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

import { tracksFetching, tracksFetched, tracksErrorFetching, setCategories, setCategoriesUrl, plailistFetched, plailistsFetching } from "../../actions/actions";

import Tracks from "../Tracks";
import Playlists from "../Playlists";


const CatalogPage = () => {
    const {token} = useSelector(state => state);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(tracksFetching());
        axios(`https://api.spotify.com/v1/browse/categories`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          method: 'GET'
        }).then(cat => {
            console.log(cat.data.categories.items);
            dispatch(setCategories(cat.data.categories.items));
        })
    }, [])

    return(
        <>
            { token ?
            <View /> :
            <Redirect to="/login"/>
            }
        </>
    )
}

const View = () => {
    const dispatch = useDispatch();
    const {categories, categoriesUrl, token} = useSelector(state => state);

    const categoriesChanged = (id) => {
        dispatch(setCategoriesUrl(id));
        dispatch(plailistsFetching());
        axios(`https://api.spotify.com/v1/browse/categories/${id}/playlists`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            method: 'GET'
          }).then(cat => {
              console.log(cat.data.playlists.items);
              dispatch(plailistFetched(cat.data.playlists.items));
          })
    }

        const items = categories.map((item, i) => {
            return (
                <li onClick={() => categoriesChanged(item.id)} key={i}><a className="dropdown-item" href="#">{item.name}</a></li>
            )
        })

    return(
        <>
            <div className="container">
                <nav className="navbar ">
                    <div className="container-fluid">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Поиск"/>
                        </form>
                        <div className="contentSorting">
                            Категория
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="headLink">Любое</span>
                                </a>
                                <ul className="dropdown-menu">
                                    {items}
                                </ul>
                            </li>
                        </div>
                        <div className="contentSorting">
                            Сортировать <a href=""><span className="headLink">По дате релиза</span></a>
                        </div>
                        <div className="contentSorting">
                            Темп <a href=""><span className="headLink">128</span></a>
                        </div>
                    </div>

                </nav>
            </div>
            {categoriesUrl ? <Playlists/> : null}
            <Tracks/>
        </>
    )
}

export default CatalogPage;