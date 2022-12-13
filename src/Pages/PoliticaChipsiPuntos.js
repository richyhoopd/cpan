import ItemText from "../Components/ItemText.js";
import PoliticaCJson from "../politica-chipsipuntos.json";

export default function PoliticaChipsiPuntos() {
    const text = PoliticaCJson;
    return (
        <>
            <ItemText tittle="Política de Chipsi Puntos" text={text} />
        </>
    )
}   