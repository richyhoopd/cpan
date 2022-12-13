import ImgMain from "../Assets/ImgMain.png";
import { Link } from "react-router-dom"
import Nav from "../Components/Nav.js";

export default function HomeMain() {
    
    return (
        <main className="main">
            <Nav />
            <div className="main__container">
                <div className="main__container__text">
                    <span className="main__container__text-caca">REPARAR <span>ES TAN FÁCIL</span> COMO</span>
                    <h1>
                        IR A TU TIENDITA
                        <br />
                        DE LA <span>ESQUINA.</span>
                    </h1>
                    <p>Convierte tu comercio en un centro de recolección autorizado de Chipsi, y gana comisiones por cada dispositivo que lleven a tu negocio.</p>
                    <Link to="/join">
                        Unirme
                    </Link>
                </div>
                <div className="main__container__img">
                    <img src={ImgMain} alt="" />
                </div>
            </div>
        </main>
    )
}