'use client'

import Image from 'next/image';
import style from './sidebar.module.css'
import { useRouter } from 'next/navigation';


export default function SideBar() {

   const router = useRouter();

   const openPageLoja = () => {
    router.push("/loja");
   }

   const openPageGerenciamento = () => {
    router.push("/gerenciamento");
   }

    return(

        <div className={style.sideBar}>
            <Image 
                src={"/assets/logo.svg"}
                width={273}
                height={108}
                alt={"Logo Sugar bliss"}
            />

            <div className={style.listSideBar}>

                <button className={style.item} onClick={openPageGerenciamento}>
                    <Image className={style.itemImage} src={"/assets/iconProductsGrey.svg"} width={24} height={24}/>
                    <span>Gerenciamento</span>
                </button>
                

                <button className={style.item} onClick={openPageLoja}>
                    <Image className={style.itemImage} src={"/assets/iconStore.svg"} width={24} height={24}/>
                    <span>Loja</span>
                    
                </button>
                

            </div>
        </div>        
    );
    
}