import { useContext } from 'react';
import { Card, Button, Form, Row, Col, CardBody, CardTitle, CardText, FormLabel } from 'react-bootstrap';
import { CartContext } from '../CartContext';

export default function ProductCard (props) {

    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);


    return(
        <Card>
            <CardBody>
                <CardTitle>{product.title}</CardTitle>
                <CardText>R$ {product.price}</CardText>
                { productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <FormLabel column="true" sm="6">No carrinho: {productQuantity}</FormLabel>
                            <Col sm="6">
                                <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                                <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                            </Col>
                        </Form>
                        <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remover do carrinho</Button>
                    </>
                    :                
                    <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Adicionar ao carrinho</Button>
                }
            </CardBody>

        </ Card>


    )
}