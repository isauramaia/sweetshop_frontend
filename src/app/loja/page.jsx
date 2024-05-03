'use client'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap'
import NavBarComponent from '../components/NavBar'
import { productsArray } from '../productsStore'
import ProductCard from '../components/ProductCard'
import CartProvider from '../CartContext'
import style from '../initial/initial.module.css'
import { useEffect, useState } from 'react'

export default function Loja() {

    const [produtos, setProdutos] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/produtos/buscar?nome=${search}`)
            .then(response => response.json())
            .then(data => {

                setProdutos(data);

            })
            .catch(error => {
                console.error('Erro ao obter produtos:', error);
            });
    }, [search]);

    const handleSearch = (valor) => {
        setSearch(valor.target.value);
    }

    const handleCategoria = () => {
        fetch(`http://localhost:5000/produtos/buscar_por_categoria?categoria=doce`)
            .then(response => response.json())
            .then(data => {

                setProdutos(data);

            })
            .catch(error => {
                console.error('Erro ao obter produtos:', error);
            });
    }

    const handleCategoriaSalgado = () => {
        fetch(`http://localhost:5000/produtos/buscar_por_categoria?categoria=salgado`)
            .then(response => response.json())
            .then(data => {

                setProdutos(data);

            })
            .catch(error => {
                console.error('Erro ao obter produtos:', error);
            });
    }

    const handleCategoriaBebida = () => {
        fetch(`http://localhost:5000/produtos/buscar_por_categoria?categoria=bebida`)
            .then(response => response.json())
            .then(data => {

                setProdutos(data);

            })
            .catch(error => {
                console.error('Erro ao obter produtos:', error);
            });
    }

    const handleFabricante = () => {
        fetch(`http://localhost:5000/produtos/buscar_por_fabricante?fabricante=mari`)
            .then(response => response.json())
            .then(data => {

                setProdutos(data);

            })
            .catch(error => {
                console.error('Erro ao obter produtos:', error);
            });
    }



    return (


        <div className={style.letra}>
            <CartProvider>
                <Container>
                    <NavBarComponent produtos={produtos} />
                    <div className={style.containerSearchingProducts}>
                        <input onChange={handleSearch} value={search} placeholder="Busca pelo nome" type="text" className={style.searchingBar}></input>
                        <button onClick={handleCategoria}> Doces </button>
                        <button onClick={handleCategoriaSalgado}> Salgados </button>
                        <button onClick={handleCategoriaBebida}> Bebida </button>
                        <button onClick={handleFabricante}> Fabricado em mari </button>

                    </div>
                    <h3 align="center" className="p-3">Os melhores doces bem aqui</h3>
                    <Row xs={1} md={3} className="g-4">
                        {produtos.map((product, idx) => (
                            <Col align="center" key={idx}>
                                <ProductCard product={product} />
                            </Col>
                        ))}


                    </Row>
                </Container>

            </CartProvider>
        </div>





    )
}