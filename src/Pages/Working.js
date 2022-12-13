import { Link } from "react-router-dom";
import ImgWorking from "../Assets/cat-working.png";
import "../Styles/working.scss";

export default function Working() {
    return(
        <article className="working">
            <img className="working__img" src={ImgWorking} alt="imagen trabajando" />
            <h2 className="working__h2">Estamos en ello :c</h2>
            <p className="working__p">Programador trabajando en esto, paciencia, por favor. Gracias uwu</p>
            <Link className="working__link" to="/">
                Volver al inicio
            </Link>
        </article>
    )
}