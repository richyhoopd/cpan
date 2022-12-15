import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import Home from "./Pages/Home.js";
import FAQ from "./Pages/FAQ.js";
import Join from "./Pages/Join.js";
import ScrollToTop from "./Components/ScrollToTop.js";
import Working from "./Pages/Working.js";
import Error404 from "./Pages/Error404.js";
import Terminos from "./Pages/Terminos.js";
import Datos from "./Pages/Datos.js";
import Cookies from "./Pages/Cookies.js";
import Privacidad from "./Pages/Privacidad.js";
import Garantia from "./Pages/Garantia.js";
import PoliticaChipsiPuntos from "./Pages/PoliticaChipsiPuntos.js";
import Send from "./Pages/Send.js";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/join" element={<Join />} />
        <Route path="/working" element={<Working />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/datos" element={<Datos />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/garantia" element={<Garantia />} />
        <Route path="/gracias/:name" element={<Send />} />
        <Route path="/politica-chipsipuntos" element={<PoliticaChipsiPuntos />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
