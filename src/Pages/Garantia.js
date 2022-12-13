import ItemText from "../Components/ItemText.js";
import GarantiaJson from "../garantia.json";

export default function Garantia() {
    const text = GarantiaJson;
    return (
        <>
            <ItemText tittle="Garantía de servicios" text={text} />
        </>
    )
}   