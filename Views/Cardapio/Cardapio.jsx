import React, { useState, useEffect } from "react";
import Header from "../../src/components/Header/Header";
import { Link, Outlet } from "react-router-dom";
import "./index.scss";

const Cardapio = () => {
  // Inicializar activeLi com o valor armazenado no localStorage ou 0 se não houver nenhum valor armazenado
  const [activeLi, setActiveLi] = useState(() => {
    const storedActiveLi = localStorage.getItem("activeLi");
    return storedActiveLi !== null ? parseInt(storedActiveLi) : 0;
  });
  

  const filters = {
    "Salgados": "Salgados",
    "Bebidas": "Bebidas",
    "Doces & Bolos": "Doces&Bolos",
    "Utensilios, Equipamentos & Descartaveis": "Ued",
  };

  useEffect(() => {
    localStorage.setItem("activeLi", activeLi);
  }, [activeLi]);

  return (
    <div className="cardapio">
      <Header />
      <div className="cardapio__title">
        <h1>CARDÁPIO</h1>
      </div>
      <ul>
        {Object.entries(filters).map(([label, path], index) => (
          <Link
            to={`/cardapio/${path}`}
            key={label}
            className={`cardapio__list ${activeLi === index ? "active" : ""}`}
            onClick={() => setActiveLi(index)}
          >
            <li className="">
              {label}
            </li>
          </Link>
        ))}
      </ul>
      <div className="cardapio__itens">
        <Outlet />
      </div>
    </div>
  ); 
};

export default Cardapio;
