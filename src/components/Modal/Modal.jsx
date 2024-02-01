import React from "react";
import "./index.scss";
import closeModal from "../../img/wrong 1.png";
import equipe from "../../img/equipe.png";
import logo from "../../img/logoVazada.svg";

export default function Modal({ isOpen, setModalOpen, children }) {
  if (isOpen) {
    return (
      <div className="modalBG">
        <div className="modalBG__modal">
          <div className="modalBG__modal-fechar" onClick={setModalOpen}>
            <img src={closeModal} alt="" />
          </div>
          <div className="modalBG__content">
            <img className="modalBG__modal-logo" src={logo} />
            <div className="modalBG__modal-text">
              Somos uma empresa familiar com fornecimento de produtos artesanais
              para realização de pequenos eventos in-company e particulares.
              Especialistas em realização de coffe breaks para congressos,
              treinamentos, convenções, workshops, entre outros.
            </div>
            <img className="modalBG__modal-equipe" src={equipe} alt="" />
          </div>
        </div>
      </div>
    );
  }

  return null;
}
