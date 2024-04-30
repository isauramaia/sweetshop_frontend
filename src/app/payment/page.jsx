'use client'

import { useContext } from "react";
import { CartContext } from "../CartContext";

export default function Payment(){

    const cart = useContext(CartContext);
    return(
        <div>
            <h1>Total: R$ {cart.getTotalCost()}</h1>
            <p>ola pagamentos</p>
        </div>
    )
}