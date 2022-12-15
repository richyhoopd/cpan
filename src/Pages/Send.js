import ImgSend from "../Assets/ImgSend.svg";
import "../Styles/send.scss";
import { useParams, useNavigate, Link } from 'react-router-dom';

export default function Send() {
    const history = useNavigate();
    const { name } = useParams();

    console.log(history);
    return(
        <article className="send">
        <img className="send__img" src={ImgSend} alt="Enviado" />
        <h2 className="send__h2">¡Hemos Registrado tu solicitud en: {name}!</h2>
        <p className="send__p">Gracias por su solicitud, en la brevedad de lo posible contactaremos con usted via email o Whatsapp para seguir con el proceso.</p>
        <p className="send__p">Algunos de los beneficios de ser Chipsi punto</p>
        <ul className="send__list">
            <li>
                Apoyo al medio ambiente y a la economia circular.
            </li>
            <li>
                Comisiones de hasta $100 por dispositivo.
            </li>
            <li>
                Aumento del flujo y la visibilidad de tu negocio.
            </li>
        </ul>
        <Link className="send__link" to="/">
            Volver
        </Link>
    </article>
    )
}
