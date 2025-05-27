import Header from "../../components/Header";
import ProductSection from "../../components/public_components/ProductSection";
import { FaWhatsapp } from "react-icons/fa";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import "./Inicio.css";
import rama from "./../../../public/rama.png"
import logo from "./../../../public/logositio.png"

const Inicio = () => {
  return (
    <div className="pagina-inicio">
    <Header/>

      <img src={rama} alt="Decoración rama" className="decoracion-rama" />

      <main className="contenido-principal">
        <div className="contenido-izquierda">
          <img src={logo} alt="Logo Carmencita" className="logo-carmencita" />
        </div>

        <div className="contenido-derecha">
          <div className="frase">
            <p>
              “Tu tienda de confianza,
              <br />
              <strong>cada vez más cerca de ti</strong>”
            </p>
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default Inicio;
