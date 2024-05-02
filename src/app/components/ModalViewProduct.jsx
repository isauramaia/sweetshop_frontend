"use client";

import { useEffect, useState } from "react";
import style from "./components.module.css";

import PropTypes from "prop-types";

const ModalViewProduct = ({ onClose, idProduct }) => {

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [fabricante, setFabricante] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/produtos/${idProduct}`);
        if (!response.ok) {
          throw new Error('Erro ao buscar produto');
        }
        const data = await response.json();
        console.log(data)
        setId(data.id_Prod);
        setName(data.nome_P);
        setDescription(data.descricao_P);
        setFabricante(data.fabricante);
        setQuantidade(data.quantidade_P);
        setValor(data.valor_P);
        setCategoria(data.categoria);
      } catch (error) {
        console.error('Erro ao obter produtos:', error);
      }
    };

    fetchProduct();
  }, [idProduct]);
  



  return (
    <div className={style.overlay}>
      <div className={style.container}>
        <button className={style.buttonViewModal} onClick={onClose}>
          X
        </button>
        <p className={style.headerViewModal}>Visualizar produto</p>
        <div className={style.containerProductData}>
          <span className={style.infoProduct}>Id: <span>{id}</span></span>
          <span className={style.infoProduct}>Nome: {name}</span>
          <span className={style.infoProduct}>Descrição: {description}</span>
          <span className={style.infoProduct}>Valor: R$ {valor}</span>
          <span className={style.infoProduct}>Quantidade no estoque: {quantidade}</span>
          <span className={style.infoProduct}>Fabricante: {fabricante}</span>
          <span className={style.infoProduct}>Categoria: {categoria}</span>
        </div>
      </div>
    </div>
  );
};

ModalViewProduct.propTypes = {
  onClose: PropTypes.func.isRequired,
  idProduct: PropTypes.number.isRequired
};

export default ModalViewProduct;
