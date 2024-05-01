"use client";

import Image from "next/image";
import style from "../initial/initial.module.css";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const openPageLoja = () => {
    router.push("/loja");
  };

  const openPageGerenciamento = () => {
    router.push("/login");
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.containerContent}>

      <Image 
                    className={style.logo}
                    src={"/assets/logo.svg"}
                    width={273}
                    height={108}
                    alt={"Logo Sugar bliss"}
                />
        <div className={style.containerLogin}>
          

            <div className={style.containerAddProduct}>
                <label>Email</label>
                <input type="text" className={style.inputInfo} />
            </div>
            

            <div className={style.containerAddProduct}>
                <label>Senha</label>
                <input type="text" className={style.inputInfo} />
            </div>

        </div>
      </div>
    </div>
  );
}
