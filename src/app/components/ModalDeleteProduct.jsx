import GenericModal from '@/app/components/GenericModal/GenericModal';
import PropTypes from 'prop-types';

const ModalDeleteProduct = ({ onClose, idProduct }) => {

  
  const makeDeleteAction = async (event)=>{
    event.preventDefault();
    
    try {
      
      const response = await fetch('http://localhost:5000/produtos/remover', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_Prod: idProduct,
        }),
      });

      
      if (response.ok) {
        
        onClose();
        console.log('Produto removido com sucesso!');
      } else {
        
        console.error('Erro ao excluir produto:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
    }
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
  onClose: PropTypes.func.isRequired,
  idProduct: PropTypes.number.isRequired // Certifique-se de ajustar o tipo de prop 'product' de acordo com a estrutura do seu objeto de produto
}

export default ModalDeleteProduct;
