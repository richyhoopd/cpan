import ImgQ1 from "../Assets/ImgQ1.svg";
import ImgQ2 from "../Assets/ImgQ2.svg";
import { Link } from "react-router-dom";

export default function HomeFQA() {
    return (
        <section className="fqa">
            <h2>PREGUNTAS FRECUENTES</h2>
            <div className="fqa__items">
                <Link to="/FAQ">
                    <img src={ImgQ1} alt="" />
                    Cuánto tardan en reparar
                    <img src={ImgQ2} alt="" />
                </Link>
                <Link to="/FAQ">
                    <img src={ImgQ1} alt="" />
                    Son confiables
                    <img src={ImgQ2} alt="" />
                </Link>
                <Link to="/FAQ">
                    <img src={ImgQ1} alt="" />
                    Cómo me puedo inscribir
                    <img src={ImgQ2} alt="" />
                </Link>
                <Link to="/FAQ">
                    <img src={ImgQ1} alt="" />
                    Cómo funcionan
                    <img src={ImgQ2} alt="" />
                </Link>
                <Link to="/FAQ">
                    <img src={ImgQ1} alt="" />
                    Quiénes pueden participar
                    <img src={ImgQ2} alt="" />
                </Link>
            </div>
            <Link to="/FAQ" className="fqa-button">
                Conocer más
            </Link>
        </section>
    )
}