'use client'

import Image from 'next/image'
import style from './initial.module.css'
import { useRouter } from 'next/navigation'

export default function Initial(){
    const router = useRouter();

    const openPageLoja = () => {
        router.push("/loja");
    }
    
    const openPageLogin = () => {
        router.push("/login");
    }

    const openPageCadastro = () => {
        router.push("/cadastro");
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

                <button className={style.mainButton} onClick={openPageLoja}>
                    Continuar sem login
                </button>

                <button className={style.mainButton} onClick={openPageCadastro} >
                    Cadastrar
                </button>

                <button className={style.mainButton} onClick={openPageLogin} >
                    Entrar
                </button>

                

                

            </div>

        </div>
        
    )
}