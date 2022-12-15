import ImgCaja from "../Assets/ImgCaja.png";
import ImgFlujo from "../Assets/ImgFlujo.svg";
import { Link } from "react-router-dom";
import "../Styles/home__what.scss";

export default function HomeWhat() {
    return (
        <section className="what">
            <h2>NO LO REPARES TÚ, <span>SOLO <br /> ALMACENALO</span></h2>
            <div className="what__items">
                <div className="what__items-item">
                    <img src={ImgCaja} alt="" />
                    <div className="what__items-item-text">
                        <span>+$50</span>
                        <p>De comisión por dispositivo</p>
                    </div>
                </div>
                <div className="what__items-item">
                    <img src={ImgFlujo} alt="" />
                    <div className="what__items-item-text">
                        <span>+FLUJO</span>
                        <p>Para tu negocio</p>
                    </div>
                </div>
            </div>
            <Link to="/join">
                Unirme
            </Link>
        </section>
    )
}