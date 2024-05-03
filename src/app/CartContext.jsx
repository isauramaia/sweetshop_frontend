import { createContext, useState } from "react";
import { productsArray, getProductsData } from "./productsStore";



export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
})

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;

        if (quantity === undefined) {
            return 0;
        }
        
        return quantity;
    }

    function addOneToCart(id){
        const quantity = getProductQuantity(id);

        if (quantity === 0) {  // se produto nao ta no carrinho
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )

        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id
                    ? { ...product, quantity: product.quantity + 1 } // se condicao eh verdadeira
                    : product                                        // se condicao eh falsa
                )
            )
        }
    }

    function deleteFromCart(id){
          setCartProducts (
            cartProducts =>
                cartProducts.filter(currentProduct => {
                    return currentProduct.id != id;
                }
                )
            )
    }

    function removeOneFromCart(id){
        const quantity = getProductQuantity(id);

        if (quantity == 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product => 
                    product.id === id
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
                )
            )
        }
    }

    function getTotalCost(produtos) {
        console.log("produtos", produtos);
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            console.log("cartitem", cartItem)
            const productData = produtos.find(product => product.id_Prod == cartItem.id);
            console.log("productdata", productData);
            totalCost += (productData.valor_P * cartItem.quantity);
        })
        return totalCost;
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return(

        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>

    )
}

export default CartProvider;