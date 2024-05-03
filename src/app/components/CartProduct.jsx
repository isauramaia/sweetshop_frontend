'use client'

import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";
import { getProductsData } from "../productsStore";
import { Button } from "react-bootstrap";


function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const produtos = props.produtos;

    console.log("produtos", produtos);

    


    function getProductsData(id) {
        //console.log("produtos", produtos);
        
        const productData = produtos.find(product => product.id_Prod == id);
        
        if (productData== undefined) {
            console.log("Product data does not exist for id: " + id);
            return undefined;
        }
    
        return productData; 
    }

    const productData = getProductsData(id);

    return (
        <>
            <h3>{productData.nome_P}</h3>
            <p>{quantity} total</p>
            <p>R$ {(quantity * productData.valor_P).toFixed(2)}</p>
            <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remover</Button>
            <hr></hr>
        </>
    )
}

export default CartProduct;