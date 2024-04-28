import { NavbarBrand, Button, Container, Modal, NavbarCollapse, NavbarToggle, Navbar, ModalHeader, ModalTitle, ModalBody } from "react-bootstrap";
import style from './navbar.module.css'
import { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";

export default function NavBarComponent() {
    const cart = useContext(CartContext);

    const [ show, setShow ] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return(
        <>
            <Navbar expand="sm">
            <NavbarBrand href="/loja">Compre na Sugar Bliss</NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse className="justify-content-end">
                <Button onClick={handleShow}>{productsCount} itens no carrinho</Button>
            </NavbarCollapse>

            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <ModalHeader closeButton>
                    <ModalTitle>Carrinho de compras</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    { productsCount > 0 ?
                        <>

                        <p>Itens no seu carrinho:</p>
                        {cart.items.map( (currentProduct, idx) => (
                            <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                        ))}
                        <h1>Total: R$ {cart.getTotalCost().toFixed(2)}</h1>

                        <Button variant = "success">
                            Confirmar pedido
                        </Button>
                        </>    

                    : 
                    <h1>Não tem itens no seu carrinho</h1>
                }
                </ModalBody>
            </Modal>
        </>
        
    )
}