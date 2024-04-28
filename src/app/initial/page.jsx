'use client'

import Image from 'next/image'
import style from './initial.module.css'
import { useRouter } from 'next/navigation'

export default function Initial(){
    const router = useRouter();

    const openPageLoja = () => {
        router.push("/loja");
    }
    
    const openPageGerenciamento = () => {
        router.push("/gerenciamento");
    }

    return(
        <div className={style.mainContainer}>
            
            
            <div className={style.containerContent}>

                <Image 
                    className={style.logo}
                    src={"/assets/logo.svg"}
                    width={273}
                    height={108}
                    alt={"Logo Sugar bliss"}
                />

                <button className={style.mainButton} onClick={openPageGerenciamento} >
                    Entrar como admin
                </button>

                <button className={style.mainButton} onClick={openPageLoja}>
                    Entrar como cliente
                </button>

            </div>

        </div>
        
    )
}