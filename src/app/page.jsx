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
                        <button className={style.filterButton}><Image src={"/assets/iconFilter.svg"} width={20} height={20} /></button>
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
                <div className={style.tableSection}>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor (R$)</th>
                                <th>Quantidade</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bolo</td>
                                <td>24,90</td>
                                <td>2</td>
                                <td>
                                    <button className={style.actionButton}><Image src={"/assets/iconView.svg"} width={24} height={24}/></button>
                                    <button className={style.actionButton}><Image src={"/assets/iconEdit.svg"} width={22} height={24}/></button>
                                    <button className={style.actionButton}><Image src={"/assets/iconDelete.svg"} width={24} height={24}/></button>
                                </td>
                            </tr>
                            <tr>
                                <td>Bolo</td>
                                <td>24,90</td>
                                <td>2</td>
                                <td>
                                    <button className={style.actionButton}><Image src={"/assets/iconView.svg"} width={24} height={24}/></button>
                                    <button className={style.actionButton}><Image src={"/assets/iconEdit.svg"} width={22} height={24}/></button>
                                    <button className={style.actionButton}><Image src={"/assets/iconDelete.svg"} width={24} height={24}/></button>
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
