"use client";

import Image from "next/image";
import style from "../initial/initial.module.css";
import { useRouter } from "next/navigation";

export default function Cadastro() {
  const router = useRouter();
  const createAccount = () => {
    router.push("/login");
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.containerContent}>
     
        <p>Cadastre-se</p>
        <div className={style.containerLogin}>
          <div className={style.containerInputInfo}>
            <label htmlFor="nomeCadastro">Nome</label>
            <input
              id="nomeCadastro"
              type="text"
              className={style.inputInfo}
              placeholder="Digite seu nome e sobrenome"
            />
          </div>

          <div className={style.containerInputInfo}>
            <label htmlFor="cpfCadastro">CPF</label>
            <input
              id="cpfCadastro"
              type="text"
              className={style.inputInfo}
              placeholder="Digite apenas números"
            />
          </div>

          <div className={style.containerInputInfo}>
            <label htmlFor="enderecoCadastro">Endereço</label>
            <input
              id="enderecoCadastro"
              type="text"
              className={style.inputInfo}
            />
          </div>

          <div className={style.containerInputInfo}>
            <label htmlFor="emailCadastro">Email</label>
            <input id="emailCadastro" type="text" className={style.inputInfo} />
          </div>

          <div className={style.containerInputInfo}>
            <label htmlFor="senhaCadastro">Senha</label>
            <input id="senhaCadastro" type="text" className={style.inputInfo} />
          </div>
          <div className={style.buttonCadastroContainer}>
            <button className={style.submitInfo} onClick={createAccount}>
              Criar conta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
