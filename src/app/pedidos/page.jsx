'use client'

import Image from "next/image";

import style from '../gerenciamento/gerenciamento.module.css'
import SideBar from "../components/SideBar/SideBar";
import ModalDeleteProduct from "../components/ModalDeleteProduct";
import { useState } from "react";
import ModalViewProduct from "../components/ModalViewProduct";
import ModalAddProduct from "../components/ModalAddProduct";

export default function Pedidos() {

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [showAddProductModal, setShowAddProductModal] = useState(false);

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
                        <span>Gerenciamento de pedidos</span>
                    </div>
                </div>
                <div className={style.mainContent}>
                    <div className={style.containerButton}>

                    </div>
                    <div className={style.tableSection}>
                        <table>
                            <thead>
                                <tr >
                                    <th>Id (pedido)</th>
                                    <th>Id (funcionário)</th>
                                    <th>Cliente</th>
                                    <th>Pagamento</th>
                                    <th>Data</th>
                                    <th>Valor total (R$)</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01</td>
                                    <td>456</td>
                                    <td>Julia</td>
                                    <td>Pix</td>
                                    <td>22/04/2001</td>
                                    <td>25,90</td>
                                    <td>
                                        <select>
                                            <option value="0">Pendente</option>
                                            <option value="1">Concluido</option>
                                        </select>
                                    </td>

                                </tr>
                                

                            </tbody>

                        </table>

                    </div>

                </div>
            </div>
        </div>
    );
}
