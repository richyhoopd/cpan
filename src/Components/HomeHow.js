import ImgEntrega from "../Assets/ImgEntrega.png";
import { Link } from "react-router-dom";
import "../Styles/home__how.scss";

export default function HomeHow() {
    return (
        <section className="how">
            <div className="how__text">
                <div className="how__text-step">
                    <span>1</span>
                    <div className="how__text-step-text">
                        <h3>Recibe</h3>
                        <p>Los clientes llegarán a ti, o puedes buscarlos por una comisión extra.</p>
                    </div>
                </div>
                <div className="how__text-step">
                    <span>2</span>
                    <div className="how__text-step-text">
                        <h3>Entrega</h3>
                        <p>Nuestro socio repartidor pasará todos los días a recoger los dispositivos.</p>
                    </div>
                </div>
                <div className="how__text-step pasoganar">
                    <span>3</span>
                    <div className="how__text-step-text">
                        <h3>Gana</h3>
                        <p>Devuelve el dispositivo a su dueño una vez reparado y recibe tu comisión al final de la semana.</p>
                    </div>
                </div>
                <Link to="/FAQ">
                    Conocer más
                </Link>
            </div>
            <div className="how__img">
                <img src={ImgEntrega} alt="" />
            </div>
        </section>
    )
}