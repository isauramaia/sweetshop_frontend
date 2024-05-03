import { useContext } from 'react';
import { Card, Button, Form, Row, Col, CardBody, CardTitle, CardText, FormLabel } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import style from '../components/components.module.css'

export default function ProductCard (props) {

    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id_Prod);
    
    console.log(product.id_Prod);

    return(
        <div className={style.letra}>
        <Card>
            <CardBody>
                <CardTitle>{product.nome_P}</CardTitle>
                <CardText>R$ {product.valor_P}</CardText>
                { productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <FormLabel column="true" sm="6">No carrinho: {productQuantity}</FormLabel>
                            <Col sm="6">
                                <Button className={style.buttonColor} sm="6" onClick={() => cart.addOneToCart(product.id_Prod)} >+</Button>
                                <Button className={style.buttonColor} sm="6" onClick={() => cart.removeOneFromCart(product.id_Prod)}>-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => cart.deleteFromCart(product.id_Prod)} className="my-2">Remover do carrinho</Button>
                    </>
                    :                
                    <Button className={style.buttonColor} variant="primary" onClick={() => cart.addOneToCart(product.id_Prod)}>Adicionar ao carrinho</Button>
                    
                }
            </CardBody>

        </ Card>
        </div>


    )
}