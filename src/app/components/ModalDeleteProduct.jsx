"use client"

import GenericModal from '@/app/components/GenericModal/GenericModal';

import PropTypes from 'prop-types';

const ModalDeleteProduct = ({ onClose }) => {

  const makeDeleteAction = async (event)=>{

    event.preventDefault();

    onClose();
  };
  
  return (

      <GenericModal 
        
          titleModal={"Excluir item"}
          textInfo={"Tem certeza de que deseja excluir esse produto?"}
          closeModal={onClose}
          actionToExecute={makeDeleteAction}
      />
  );
};

ModalDeleteProduct.propTypes = {

  onClose: PropTypes.func.isRequired
}

export default ModalDeleteProduct;