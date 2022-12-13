import ItemText from "../Components/ItemText.js";
import DatosJson from "../datos.json";

export default function Datos() {
    const text = DatosJson;
    return (
        <>
            <ItemText tittle="Uso de datos" text={text} />
        </>
    )
}   