import React, { useState } from "react";
import "./index.scss";
import BannerHeader from "../../img/bannerHeaderCardapio.svg";
import logo from "../../img/logoVazada.svg";
import carrinho from "../../img/carrinho.svg";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const divStyle = {
    backgroundImage: `url(${BannerHeader})`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
  };

  return (
    <div style={divStyle}>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} />
      <div className="headerComp">
        <div className="headerComp__component">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
          <div className="headerComp__teste">
            <div
              className={`headerComp__lis ${
                isMobileMenuOpen ? "mobile-menu-open" : ""
              }`}
            >
              <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
              <h1>
                <Link to={"/Site"} className="headerComp__component-text">
                  Home
                </Link>
              </h1>
              <h1
                style={{ cursor: "pointer" }}
                onClick={() => setOpenModal(true)}
              >
                Sobre Nós
              </h1>
              <h1>
                <Link to={"/galeria"} className="headerComp__component-text">
                  Galeria
                </Link>
              </h1>
              <h1>
                <Link to={"/Cardapio"} className="headerComp__component-text">
                  Cardapio
                </Link>
              </h1>
            </div>
            <Link to={"/finalizar"}>
              <img src={carrinho} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
