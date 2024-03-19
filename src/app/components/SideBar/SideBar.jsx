import Image from 'next/image';
import style from './sidebar.module.css'

export default function SideBar() {

    return(

        <div className={style.sideBar}>
            <Image 
                className={style.logo}
                src={"/assets/logo.svg"}
                width={273}
                height={108}
                alt={"Logo Sugar bliss"}
            />

            <div className={style.listSideBar}>
                <div className={style.item}>
                    <Image className={style.itemImage} src={"/assets/iconProductsGrey.svg"} width={24} height={24}/>
                    <span>Produtos</span>
                </div>
                <div className={style.item}>
                    <Image src={"/assets/iconProductsGrey.svg"} width={24} height={24}/>
                    <span>Produtos</span>
                </div>

            </div>
        </div>        
    );
    
}