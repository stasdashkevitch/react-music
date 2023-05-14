import Achivments from "./HeaderComponents/Achivments";
import MainDescription from "./HeaderComponents/MainDescription";
import Possibilities from "./HeaderComponents/Possibilities";
import Subscriptions from "./HeaderComponents/Subscriptions";
import TracksDescription from "./HeaderComponents/TracksDescription";

const Header = () => {
    return (
        <>
            <main className="container`-xxl">
                <MainDescription/>
                <TracksDescription/>
                <Achivments/>
                <Possibilities/>
                <Subscriptions/>
            </main>
        </>
    )
}

export default Header;