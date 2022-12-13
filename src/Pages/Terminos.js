import ItemText from "../Components/ItemText.js";
import TerminosJson from "../terminos.json";

export default function Terminos() {
    const text = TerminosJson;
    return (
        <>
            <ItemText tittle="Términos y condiciones" text={text} />
        </>
    )
}