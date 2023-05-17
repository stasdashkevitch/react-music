import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setToken } from "../../actions/actions";


const LoginPage = () => {
    const CLIENT_ID = '592478a61d104d0e93c73eaea64a5703';
    const REDIRECT_URI = "http://localhost:3000/login";
    const AUTH_ENDPOINT = "https:/accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";

    let {token} = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        const hash = window.location.hash;
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];

            window.location.hash = "";
        }
        dispatch(setToken(token));
    }, []);

    const logout = () => {
        dispatch(setToken(''));
    }

    return(
        <>
            <div className="login">
                <div className="registration-cssave">
                    <form>
                        <h3 className="text-center">Вход</h3>
                        <div className="form-group">
                            <input className="form-control item" name="username"
                                id="username" placeholder="Логин"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control item" name="Пароль" id="password"
                                placeholder="Пароль"/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block create-account" id="Enter" type="submit">Войти</button>
                        </div>
                    </form>
                </div>
                {(!token) ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}
            </div>
            <div className="container">
            </div>
        </>
    )
}

export default LoginPage;