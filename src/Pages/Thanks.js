import { Link } from "react-router-dom";
import ImgWorking from "../Assets/cat-error.png";
import "../Styles/working.scss";
import { useParams, useNavigate } from 'react-router-dom';

export default function Thanks() {
    const history = useNavigate();
    const { name } = useParams();

    console.log(history);
    return(
        <article className="working">
            <img className="working__img" src={ImgWorking} alt="imagen trabajando" />
            <h2 className="working__h2">{name}, gracias por enviar tu solicitud para Chipsi Puntos</h2>
            <p className="working__p">Te invitamos a mirar las preguntas frecuentes para que conozcas mas sobre los chipsi puntos!</p>
            <Link className="working__link" to="/FAQ">
                Ver FAQ
            </Link>
        </article>
    )
}
