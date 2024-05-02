'use client'

import Image from "next/image";

import style from '../gerenciamento/gerenciamento.module.css'
import SideBar from "../components/SideBar/SideBar";
import ModalDeleteProduct from "../components/ModalDeleteProduct";
import { useEffect, useState } from "react";

export default function Pedidos() {

    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/pedidos')
            .then(response => response.json())
            .then(data => {

                setPedidos(data);

            })
            .catch(error => {
                console.error('Erro ao obter produtos:', error);
            });
    }, []);

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
                                {pedidos.map((pedido, index) => (
                                    <tr key={index}>
                                        <td>{pedido.id_Ped}</td>
                                        <td>{pedido.id_funcionario}</td>
                                        <td>{pedido.id_clientes}</td>
                                        <td>{pedido.metodo_pagamento}</td>
                                        <td>{pedido.data}</td>
                                        <td>{pedido.valor_total}</td>
                                        <td>
                                            <select>
                                                {pedido.status === "Pendente" ? (
                                                    <>
                                                        <option value="0">Pendente</option>
                                                        <option value="1">Aprovado</option>
                                                    </>
                                                ) : (
                                                    <>
                                                        <option value="1">Aprovado</option>
                                                        <option value="0">Pendente</option>
                                                    </>
                                                )}
                                            </select>
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
