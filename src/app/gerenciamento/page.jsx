'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import style from './gerenciamento.module.css'
import SideBar from "../components/SideBar/SideBar";
import ModalDeleteProduct from "../components/ModalDeleteProduct";
import ModalViewProduct from "../components/ModalViewProduct";
import ModalAddProduct from "../components/ModalAddProduct";

export default function Gerenciamento() {

    const [showViewModal, setShowViewModal] = useState(false);
    const [showAddProductModal, setShowAddProductModal] = useState(false);
    const [produtos, setProdutos] = useState([]);

    

    const [search, setSearch] = useState("");

    const [selectedProductId, setSelectedProductId] = useState(null);

    const[productIdSelected, setProductIdSelected] = useState(null);

    // const[ produtosQuantidade, setProdutosQuantidade] = useState([]);
    

    const handleDeleteModalOpen = (productId) => {
        setSelectedProductId(productId);
    };
    
    const handleDeleteModalClose = () => {
        setSelectedProductId(null);
    };

    const handleViewModalOpen = (productId) => {
        setProductIdSelected(productId);
    };

    const handleViewModalClose = () => {
        setProductIdSelected(null);
    };

    const handleAddProductModalOpen = () => {
        setShowAddProductModal(true);
    }

    const handleAddProductModalClose = () => {
        setShowAddProductModal(false);
    }

    const handleSearch = (valor) => {
        setSearch(valor.target.value);
    }

    const handleFilter = () => {
        
            fetch(`http://localhost:5000/produtos/buscar_por_quantidade?qtd_max=5`)
                        .then(response => response.json())
                        .then(data => {
                            
                            setProdutos(data);
                        })
                        .catch(error => {
                            console.error('Erro ao obter produtos:', error);
                        });
                
    }
    

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

    return (
        <div className={style.containerPages}>
            <SideBar />
            <div className={style.mainPage}>
                <div className={style.header}>
                    <div className={style.headerContent}>
                        <span>Gerenciamento de produtos</span>
                        <div className={style.searchHeader}>
                            <Image src={"/assets/iconSearch.svg"} width={20} height={20} />
                            <input onChange={handleSearch} value={search} placeholder="Buscar" type="text" className={style.searchingBar}></input>
                            <button className={style.filterButton} onClick={handleFilter}><Image src={"/assets/iconFilter.svg"} width={20} height={20} /></button>
                        </div>
                    </div>
                </div>
                <div className={style.mainContent}>
                    <div className={style.containerButton}>
                        <button type="submit" className={style.buttonNewProduct} onClick={handleAddProductModalOpen}>
                            <Image src={"/assets/iconAdd.svg"} width={16} height={16} />
                            <span className={style.labelButtonNewProduct}>Novo produto</span>
                        </button>
                        {showAddProductModal && <ModalAddProduct onClose={handleAddProductModalClose} />}
                    </div>
                    <div className={style.tableSection}>
                        <table>
                            <thead>
                                <tr >
                                    <th>Nome</th>
                                    <th>Valor (R$)</th>
                                    <th>Quantidade</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>

                                {produtos.map((produto, index) => (

                                    <tr key={index}>
                                        <td>{produto.nome_P}</td>
                                        <td>{produto.valor_P}</td>

                                        <td>{produto.quantidade_P}</td>

                                        <td>
                                            {productIdSelected === produto.id_Prod && (
                                                <ModalViewProduct onClose={handleViewModalClose} idProduct={produto.id_Prod}  />
                                            )}
                                            <button className={style.actionButton} onClick={() => handleViewModalOpen(produto.id_Prod)}><Image src={"/assets/iconView.svg"} width={24} height={24} /></button>
                                            

                                            {selectedProductId === produto.id_Prod && (
                                                <ModalDeleteProduct onClose={handleDeleteModalClose} idProduct={produto.id_Prod} />
                                            )}
                                            <button type="button" className={style.actionButton} onClick={() => handleDeleteModalOpen(produto.id_Prod)}><Image src={"/assets/iconDelete.svg"} width={24} height={24} /></button>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
