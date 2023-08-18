import "../styles/header.css"
import cloud from "../images/cloud.png"
import sun from "../images/sun.png"

export const Header = () => {
    const title = "Météo Vista"

    return (
        <header>
            <div className="meteo_title">
                <img src={cloud} alt="Un petit nuage" className="cloud_title" />
                <h1 className="first_title">
                    {title}
                </h1>
                <img src={sun} alt="Un petit soleil" className="sun_title" />
            </div>            
        </header>
    )
}