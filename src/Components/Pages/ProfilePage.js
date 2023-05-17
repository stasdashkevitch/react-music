const ProfilePage = () => {
    return(
        <>
            <div className="personInfo">
                <div className="personBox">
                    <div className="boxLogo">
                        <a href=""> <img
                                src="https://catherineasquithgallery.com/uploads/posts/2021-02/1614515379_52-p-bukvi-na-belom-fone-52.png"
                                alt="Face" id="personFaceLogo"/></a>
                    </div>
                </div>
                <div className="PersonName">
                    <h2 className="PersonNameText">Влад Волчо</h2>
                    <div className="preferences">
                        <div className="contentSorting" id="contentSortingBig">
                            Подписка <a href=""><span className="headLink" id="headLinkBig">HIFI</span></a>
                        </div>
                        <div className="contentSorting" id="contentSortingBig">
                            Страна <a href=""><span className="headLink">Беларусь</span></a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProfilePage;