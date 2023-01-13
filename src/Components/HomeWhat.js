import ImgCaja from "../Assets/ImgCaja.png";
import ImgFlujo from "../Assets/ImgFlujo.svg";
import { Link } from "react-router-dom";
import "../Styles/home__what.scss";

export default function HomeWhat() {
    return (
        <section className="what">
            <h2>TU NO REPARAS, <span>SOLO <br /> ALMACENAS</span></h2>
            <div className="what__items">
                <div className="what__items-item">
                    <img src={ImgCaja} alt="" />
                    <div className="what__items-item-text">
                        <span>+$50</span>
                        <p>De comisión por dispositivo recibido.</p>
                    </div>
                </div>
                <div className="what__items-item">
                    <img src={ImgFlujo} alt="" />
                    <div className="what__items-item-text">
                        <span>+FLUJO</span>
                        <p>De clientes para tu negocio</p>
                    </div>
                </div>
            </div>
            <Link to="/join">
                Unirme
            </Link>
        </section>
    )
}