'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import style from './gerenciamento.module.css'
import SideBar from "../components/SideBar/SideBar";
import ModalDeleteProduct from "../components/ModalDeleteProduct";
import ModalViewProduct from "../components/ModalViewProduct";
import ModalAddProduct from "../components/ModalAddProduct";

export default function Gerenciamento() {

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [showAddProductModal, setShowAddProductModal] = useState(false);
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/produtos')
            .then(response => response.json())
            .then(data => {
                // Define os dados recebidos do servidor no estado produtos
                setProdutos(data);
            })
            .catch(error => {
                console.error('Erro ao obter produtos:', error);
            });
    }, []);

    const handleDeleteModalOpen = () => {
        setShowDeleteModal(true);
    };

    const handleDeleteModalClose = () => {
        setShowDeleteModal(false);
    };

    const handleViewModalOpen = () => {
        setShowViewModal(true);
    };

    const handleViewModalClose = () => {
        setShowViewModal(false);
    };

    const handleAddProductModalOpen = () => {
        setShowAddProductModal(true);
    }

    const handleAddProductModalClose = () => {
        setShowAddProductModal(false);
    }

    return (
        <div className={style.containerPages}>
            <SideBar />
            <div className={style.mainPage}>
                <div className={style.header}>
                    <div className={style.headerContent}>
                        <span>Gerenciamento de produtos</span>
                        <div className={style.searchHeader}>
                            <Image src={"/assets/iconSearch.svg"} width={20} height={20} />
                            <input placeholder="Buscar" type="text" className={style.searchingBar}></input>
                            <button className={style.filterButton}><Image src={"/assets/iconFilter.svg"} width={20} height={20} /></button>
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
                                {/* Mapeia os produtos recebidos do estado e renderiza cada um deles */}
                                {produtos.map((produto, index) => (
                                    <tr key={index}>
                                        <td>{produto.nome_P}</td>
                                        <td>{produto.valor_P}</td>
                                        <td>{produto.quantidade_P}</td>
                                        <td>
                                            <button className={style.actionButton} onClick={handleViewModalOpen}><Image src={"/assets/iconView.svg"} width={24} height={24} /></button>
                                            {showViewModal && <ModalViewProduct onClose={handleViewModalClose} />}
                                            <button type="button" className={style.actionButton} onClick={handleDeleteModalOpen}><Image src={"/assets/iconDelete.svg"} width={24} height={24} /></button>
                                            {showDeleteModal && <ModalDeleteProduct onClose={handleDeleteModalClose} />}
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
