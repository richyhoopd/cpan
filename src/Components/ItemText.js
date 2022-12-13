import Nav from "../Components/Nav.js";
import Footer from "../Components/Footer.js";
import ItemTextComponent from "./ItemTextComponent.js";
import "../Styles/item__text.scss";

export default function ItemText(props) {
    const textContent = props.text;
  
    return (
      <>
      <Nav />
        <article className="item__text">
          <h2>{props.tittle}</h2>
          {textContent.map((e) => ( 
            <ItemTextComponent text={e} />
          ))}
        </article>
        <Footer />
      </>
    );
  }