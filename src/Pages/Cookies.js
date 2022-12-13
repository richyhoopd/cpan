import ItemText from "../Components/ItemText.js";
import CookiesJson from "../cookies.json";

export default function Cookies() {
    const text = CookiesJson;
    return (
        <>
            <ItemText tittle="Uso de Cookies" text={text} />
        </>
    )
}   