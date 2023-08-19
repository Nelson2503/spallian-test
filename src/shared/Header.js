import "../styles/header.css"
import { NavBar } from "../components/NavBar"
import { Link } from "react-router-dom"

export const Header = ({onSearch}) => {
    const title = "Poképédia"

    return (
        <header>
            <div className="poke_title">
                <Link to={"/"} className="first_title">
                    {title}
                </Link>
            </div>   
            <div className="navbar">
                <NavBar onSearch={onSearch} />
                </div>         
        </header>
    )
}