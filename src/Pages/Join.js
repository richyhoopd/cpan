import Nav from "../Components/Nav.js";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/join.scss";
import Footer from "../Components/Footer.js";
import React, { useState } from "react";
import emailjs from 'emailjs-com';



export default function Join() {

    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    
    function sendEmail(e) {
      e.preventDefault();
      if (email !== "") {
        // Send the email using emailjs
        emailjs.sendForm('service_w4vq21h', 'template_6ls1agd', e.target, 'xmdMFjwSqkjIssZKN')
          .then((result) => {
            emailjs.sendForm('service_5armqqh', 'template_xpjat5s', e.target, 'SvWGY6TRfPPNmlBEC')
              .then((result) => {
                console.log(result.text);
                console.log(email)
              }, (error) => {
                console.log(error.text);
              });
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });
         
        e.target.reset();
        let today = new Date();
        let date =
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate();
        navigate(`/gracias/${email}`, date);
    }
    }
    


    return (
        <>
            <Nav />
            <article className="join">
                <h2 className="join__tittle">¡Estás a solo un paso!</h2>
                <p className="join__subtittle">Una vez llenado el formulario contactaremos contigo lo antes posible para darte de alta como Chipsi punto</p>
                <form onSubmit={sendEmail} action="" className="join__form">
                    <input className="join__form-input" required type="name" placeholder="Nombre del establecimiento" id="input__establecimiento" name="stablishment" />
                    <input className="join__form-input" required type="name" placeholder="Nombre del responsable" id="input__responsable" name="responsable"/>
                    <input className="join__form-input" required type="email" placeholder="Email" id="input__email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input className="join__form-input" required type="number" placeholder="Teléfono/Móvil" id="input__telefono" name="pnumber"/>
                    <input className="join__form-input" required type="postal" placeholder="Código postal" id="input__postal" name="pc"/>
                    <input className="join__form-input" required type="street-address" placeholder="Dirección" id="input__calle" name="adress"/>
                    <input className="join__form-input" required type="number" placeholder="Número exterior" id="input__num" name="ext"/>
                    <input className="join__form-input" required type="text" placeholder="Colonia" id="input__colonia" name="col"/>
                    <input className="join__form-input" required type="city" placeholder="Ciudad/Municipio" id="input__ciudad" name="city"/>
                    <span className="join__form-terms">
                        <input required id="aceptoterminos" type="checkbox" />
                        <label htmlFor="aceptoterminos">He leído y acepto los <Link to="/terminos">Términos y condiciones</Link>, la <Link to="/politica-chipsipuntos">Política de Chipsi Puntos</Link> y la <Link to="/garantia">Garantía de servicios</Link>.</label>
                    </span>
                    <div className="join__form-button">
                        <button>
                            Enviar
                        </button>
                    </div>
                </form>
            </article>
            <Footer />
        </>
    )
}