'use client'

import { useRouter } from 'next/navigation';
import style from './profile.module.css'
import Image from "next/image";



export default function Profile() {

    const router = useRouter();
    const openPagePedidosCliente = () =>{
        router.push("pedidoscliente")
    }

    const openPageProfile = () =>{
        router.push("profile")
    }

    return (
        <div className={style.sideBar}>
        <Image 
            src={"/assets/logo.svg"}
            width={273}
            height={108}
            alt={"Logo Sugar bliss"}
        />

        <div className={style.listSideBar}>

            <button className={style.item} onClick={openPageProfile}>
                <Image className={style.itemImage} src={"/assets/iconProductsGrey.svg"} width={24} height={24}/>
                <span>Meus dados</span>
            </button>
            

            <button className={style.item} onClick={openPagePedidosCliente}>
                <Image className={style.itemImage} src={"/assets/iconStore.svg"} width={24} height={24}/>
                <span>Pedidos</span>
                
            </button>
            

        </div>
    </div>   
    )
}