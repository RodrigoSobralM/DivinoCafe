import React from "react";
import LinhaDivisoraCardapio from "../../../src/components/LinhaDivisoraCardapio/LinhaDivisoraCardapio";
import "./index.scss"
const Salgados = ({ data }) => {
  const filters = {
    "Salgados Fritos": data.filter((Salgados) => Salgados.tipo === "frito"),
    "Salgados Assados": data.filter((Salgados) => Salgados.tipo === "assado"),
    "Canapés": data.filter((Salgados) => Salgados.tipo === "canapé"),
    "Mini Sanduíches": data.filter(
      (Salgados) => Salgados.tipo === "mini sanduíche"
    ),
  };

  return (
    <div className="salgados">
      {Object.entries(filters).map(([key, index]) => (
        <div key={key}>
          <h1>{key}</h1>
          <LinhaDivisoraCardapio />
          {index.map((item, idx) => (
            <div key={idx} className="salgados__item">
              <p>{item.nome}</p>
              <p>R${item.preco}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Salgados;
