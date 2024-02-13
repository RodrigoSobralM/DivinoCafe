import React from "react";
import "./index.scss";
import Header from "../../src/components/Header/Header";
import ImgsGaleria from "../../src/components/ImgsGaleria/ImgsGaleria";

const Galeria = ({ data }) => {
  return (
    <div className="fundo">
      <Header />
      <div className="nGaleria">
        <h1>GALERIA</h1>
        <div className="nGaleria__displayImg">
          {data.map((imgs) => (
            <ImgsGaleria key={imgs.id} imgPath={imgs.imgPath} />
          ))}
        </div>
      </div>
      <div className="nFotos"></div>
    </div>
  );
};

export default Galeria;
