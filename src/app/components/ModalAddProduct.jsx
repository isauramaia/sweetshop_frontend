
import style from './components.module.css'



import PropTypes from 'prop-types';

const ModalAddProduct = ({ onClose }) => {



  return (



    <div className={style.overlay}>
      <div className={style.containerAdd}>

        <button className={style.buttonViewModal} onClick={onClose}>X</button>
        <p className={style.headerViewModal}>Cadastrar produto</p>

        <div className={style.containerAddProduct}>
          <form >
            <label>Nome</label>
            <input type="text" className={style.inputInfo} />

            <label >Descrição</label>
            <input  type="text" className={style.inputInfo}  />

            <label >Valor (R$)</label>
            <input  type="text" className={style.inputInfo} />

            <label >Quantidade no estoque</label>
            <input  type="number" className={style.inputInfo} />

            <label >Fabricante</label>
            <input  type="text" className={style.inputInfo} />

            <input type="submit" value="Adicionar produto" className={style.submitInfo} />


          </form>
        </div>


      </div>
    </div>


  );
};

ModalAddProduct.propTypes = {

  onClose: PropTypes.func.isRequired
}

export default ModalAddProduct;