'use client'

import { useContext } from "react";
import { CartContext } from "../CartContext";

export default function Payment(){

    const cart = useContext(CartContext);
    return(
        <div>
            <p>oi</p>
        </div>
    )
}