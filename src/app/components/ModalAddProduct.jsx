import React, { useState } from 'react';
import style from './components.module.css';
import PropTypes from 'prop-types';

const ModalAddProduct = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nome_P: '',
    descricao_P: '',
    valor_P: '',
    quantidade_P: '',
    fabricante: '',
    categoria: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/produtos/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Produto cadastrado com sucesso!');
        onClose();
      } else {
        const data = await response.json();
        alert(`Erro ao cadastrar produto: ${data.erro}`);
      }
    } catch (error) {
      console.error('Erro ao enviar solicitação:', error);
      alert('Erro ao enviar solicitação. Por favor, tente novamente.');
    }
  };

  return (
    <div className={style.overlay}>
      <div className={style.containerAdd}>
        <button className={style.buttonViewModal} onClick={onClose}>X</button>
        <p className={style.headerViewModal}>Cadastrar produto</p>

        <div className={style.containerAddProduct}>
          <form onSubmit={handleSubmit}>
            <label>Nome</label>
            <input type="text" name="nome_P" value={formData.nome_P} onChange={handleChange} className={style.inputInfo} />

            <label >Descrição</label>
            <input type="text" name="descricao_P" value={formData.descricao_P} onChange={handleChange} className={style.inputInfo} />

            <label >Valor (R$)</label>
            <input type="text" name="valor_P" value={formData.valor_P} onChange={handleChange} className={style.inputInfo} />

            <label >Quantidade no estoque</label>
            <input type="number" name="quantidade_P" value={formData.quantidade_P} onChange={handleChange} className={style.inputInfo} />

            <label >Fabricante</label>
            <input type="text" name="fabricante" value={formData.fabricante} onChange={handleChange} className={style.inputInfo} />

            <label >Categoria</label>
            <input type="text" name="categoria" value={formData.categoria} onChange={handleChange} className={style.inputInfo} />

            <input type="submit" value="Adicionar produto" className={style.submitInfo} />
          </form>
        </div>
      </div>
    </div>
  );
};

ModalAddProduct.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default ModalAddProduct;
