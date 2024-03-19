import Image from "next/image";
import SideBar from "./components/SideBar/SideBar";
import style from  './page.module.css'

export default function Home() {
  return (
    
    <div className={style.containerPages}>
        <SideBar/>
        <div className={style.mainPage}>
            <div className={style.header}>
                <div className={style.headerContent}>
                <span>Gerenciamento de produtos</span>
                    <div className={style.searchHeader}>
                        <Image src={"/assets/iconSearch.svg"} width={20} height={20}/>
                        <input placeholder="Buscar" type="text" className={style.searchingBar}></input>
                    </div>
                </div>
            </div>
            <div className={style.mainContent}>
                <div className={style.containerButton}>
                    <button type="submit" className={style.buttonNewProduct}>
                        <Image src={"/assets/iconAdd.svg"} width={16} height={16}/>
                        <span className={style.labelButtonNewProduct}>Novo produto</span>
                    </button>
                </div>
                
            </div>
        </div>
    </div>  
  );
}
