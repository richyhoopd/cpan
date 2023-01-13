import ImgMain from "../Assets/ImgMain.png";
import { Link } from "react-router-dom"
import Nav from "../Components/Nav.js";

export default function HomeMain() {
    
    return (
        <main className="main">
            <Nav />
            <div className="main__container">
                <div className="main__container__text">
                    <span className="main__container__text-caca">OFRECE A <span>TUS CLIENTES</span></span>
                    <h1>
                        REPARACIONES
                        <br />
                        EN TU <span>NEGOCIO.</span>
                    </h1>
                    <p>Convierte tu comercio en un centro de recolección autorizado de Chipsi, y obten ingresos por cada dispositivo que tus clientes lleven a reparar en tu establecimiento.</p>
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