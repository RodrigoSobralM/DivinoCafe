import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import Header from "../../src/components/Header/Header";
import iconeLinkedin from "../../src/assets/pngwing 2.png";
import iconeInstagram from "../../src/assets/pngwing 1.png";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="nServicos">
        <h1>NOSSOS SERVIÇOS</h1>
        <div>
          <h2>Coffe Break</h2>
          <h3>
            Intervalo estratégico em reuniões, seminários, cursos ou congressos,
            proporcionando um momento valioso de networkin.
          </h3>
          <h2>Coquetéis</h2>
          <h3>
            Proporciona um momento de descontração e valorização do seu evento,{" "}
            produto, ou serviço junto aos seus clientes e colaboradores.
          </h3>
        </div>
      </div>
      <div className="nLinks">
        <h1>ACOMPANHE A DIVINO</h1>
        <div className="nLinks__links">
          <a href="http://linkedin.com/company/divinocafeecia/">
            <img src={iconeLinkedin}></img> divinocafeecia
          </a>
          <a href="http://instagram.com/divinocafeecia/">
            <img src={iconeInstagram}></img> divinocafeecia
          </a>
        </div>
      </div>
      <div className="nOrcamento">
        <h1>ORÇAMENTO</h1>
        <Link to={"/Cardapio/Salgados"}>
          <button>Solicite seu orçamento AQUI!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
