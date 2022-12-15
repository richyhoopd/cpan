import { NavLink } from "react-router-dom";
import ImgLogo from "../Assets/Logo.svg";
import { Link } from "react-router-dom"
import "../Styles/home__main.scss";
import ImgMenu from "../Assets/ImgMenu.svg";
import ImgX from "../Assets/ImgX.svg";

export default function Nav() {
    let activeClassName = "cagada";
    return (
        <>
            <nav className="nav">
                <Link to="/" className="nav__logo">
                    <img src={ImgLogo} alt="Logo chipsi" />
                </Link>
                <div className="nav__center">
                    <NavLink to="/"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }>
                        ¿Qué hacemos?
                    </NavLink>
                    <NavLink to="/FAQ"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }>
                        Preguntas frecuentes
                    </NavLink>
                    <NavLink to="/join"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }>
                        Quiero unirme
                    </NavLink>
                    
                </div>
                <div className="nav__right">
                <a href="https://api.whatsapp.com/send?phone=5213339485139&text=%C2%A1Hola!%20Quisiera%20saber%20m%C3%A1s%20acerca%20de%20los%20Chipsi%20Puntos%20" target="_blank" rel="noopener noreferrer">
                        Contactanos
                    </a>
                    <Link to="/join">
                        Unirme
                    </Link>
                </div>
            </nav>
            <nav className="nav__mobile">
                <Link to="/" className="nav__mobile__logo">
                    <img src={ImgLogo} alt="Logo chipsi" />
                </Link>
                <input type="checkbox" id="nav__menu" />
                <label className="nav__mobile-button" htmlFor="nav__menu">
                    <img src={ImgMenu} alt="ImgMenu" />
                </label>
                <div className="nav__mobile__menu">
                    <label htmlFor="nav__menu">
                        <img src={ImgX} alt="" />
                    </label>
                    <div className="nav__mobile__menu__buttons">
                    <a href="https://api.whatsapp.com/send?phone=5213339485139&text=%C2%A1Hola!%20Quisiera%20saber%20m%C3%A1s%20acerca%20de%20los%20Chipsi%20Puntos%20" target="_blank" rel="noopener noreferrer">
                            Contactanos
                        </a>
                        <Link to="/join">
                            Unirme
                        </Link>
                    </div>
                    <div className="nav__mobile__menu__links">
                        <NavLink to="/"
                            className={({ isActive }) =>
                                isActive ? activeClassName : undefined
                            }>
                            ¿Qué hacemos?
                        </NavLink>
                        <NavLink to="/FAQ"
                            className={({ isActive }) =>
                                isActive ? activeClassName : undefined
                            }>
                            Preguntas frecuentes
                        </NavLink>
                        <NavLink to="/join"
                            className={({ isActive }) =>
                                isActive ? activeClassName : undefined
                            }>
                            Quiero unirme
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    )

}