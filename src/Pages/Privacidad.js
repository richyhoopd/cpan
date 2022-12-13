import ItemText from "../Components/ItemText.js";
import PrivacidadJson from "../privacidad.json";

export default function Privacidad() {
    const text = PrivacidadJson;
    return (
        <>
            <ItemText tittle="Política de privacidad" text={text} />
        </>
    )
}   