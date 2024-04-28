import { useContext } from "react";
import { CartContext } from "../CartContext";
import { getProductsData } from "../productsStore";
import { Button } from "react-bootstrap";


function CartProduct(props) {
    const cart = useContext(CartContext);

    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductsData(id);

    return (
        <>
            <h3>{productData.title}</h3>
            <p>{quantity} total</p>
            <p>R$ {(quantity * productData.price).toFixed(2)}</p>
            <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remover</Button>
            <hr></hr>
        </>
    )
}

export default CartProduct;