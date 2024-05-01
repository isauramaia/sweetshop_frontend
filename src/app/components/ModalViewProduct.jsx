"use client";

import style from "./components.module.css";

import PropTypes from "prop-types";

const ModalViewProduct = ({ onClose }) => {
  return (
    <div className={style.overlay}>
      <div className={style.container}>
        <button className={style.buttonViewModal} onClick={onClose}>
          X
        </button>
        <p className={style.headerViewModal}>Visualizar produto</p>
        <div className={style.containerProductData}>
          <span className={style.infoProduct}>Id: 01</span>
          <span className={style.infoProduct}>Nome: axxxxxxxxx</span>
          <span className={style.infoProduct}>Descrição: axxxxxxxxx</span>
          <span className={style.infoProduct}>Valor: R$ 20,00</span>
          <span className={style.infoProduct}>Quantidade no estoque: </span>
          <span className={style.infoProduct}>Fabricante: axxxxxxxxx</span>
        </div>
      </div>
    </div>
  );
};

ModalViewProduct.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalViewProduct;
