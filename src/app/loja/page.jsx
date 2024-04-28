'use client'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap'
import NavBarComponent from '../components/NavBar'
import { productsArray } from '../productsStore'
import ProductCard from '../components/ProductCard'
import CartProvider from '../CartContext'


export default function Loja(){

    return(
        <CartProvider>
            <Container>
            <NavBarComponent></NavBarComponent>
            <h1 align="center" className="p-3">Os melhores doces bem aqui</h1>
            <Row xs={1} md={3} className="g-4">
                {productsArray.map((product, idx) => (
                    <Col align="center" key={idx}>
                        <ProductCard product={product}/>
                    </Col>
                ))}
                
                
            </Row>      
        </Container>

        </CartProvider>
        
       
            

    )
}