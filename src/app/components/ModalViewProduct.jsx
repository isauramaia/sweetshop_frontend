"use client"

import style from './components.module.css'



import PropTypes from 'prop-types';

const ModalViewProduct = ({ onClose }) => {

  
  
  return (



    <div className={style.overlay}>
            <div className={style.container}>

                    <button className={style.buttonViewModal} onClick={onClose}>X</button>
                    <p className={style.headerViewModal}>Visualizar produto</p>

                  
            </div>
    </div>
      
  );
};

ModalViewProduct.propTypes = {

  onClose: PropTypes.func.isRequired
}

export default ModalViewProduct;