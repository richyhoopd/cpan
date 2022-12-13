import "../Styles/home.scss";
import HomeMain from "../Components/HomeMain.js";
import HomeWhat from "../Components/HomeWhat.js";
import HomeHow from "../Components/HomeHow.js";
import HomeComments from "../Components/HomeComments.js";
import HomeFQA from "../Components/HomeFQA.js";
import ImgFondo from "../Assets/ImgFondo.svg"
import ImgFondo2 from "../Assets/ImgFondo2.png";
import Footer from "../Components/Footer.js";

export default function Home() {

    return (
        <>
            <article className="mipapa">
                <img className="imagen__fondo" src={ImgFondo} alt="" />
                <HomeMain />
                <HomeWhat />
                <HomeHow />
            </article>
            <article className="mipapa2">
                <img className="imagen__fondo2" src={ImgFondo2} alt="" />
                <HomeComments />
                <HomeFQA />
            </article>
            <Footer />
        </>
    )
}