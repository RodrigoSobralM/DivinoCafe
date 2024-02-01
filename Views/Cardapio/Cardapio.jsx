import React from "react";
import Header from "../../src/components/Header/Header";
import { Link, Outlet } from "react-router-dom";

const Cardapio = () => {
  const filters = {
    "Salgados": "Salgados",
    "Bebidas": "Bebidas",
    "Doces & Bolos": "Doces&Bolos",
    "Utensilios, Equipamentos & Descartaveis": "Ued",
  };

  return (
    <div>
      <Header />
      <ul>
        {Object.entries(filters).map(([label, path]) => (
          <li key={label}>
            <Link to={`/cardapio/${path}`}>{label}</Link>
          </li>
        ))}
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Cardapio;
