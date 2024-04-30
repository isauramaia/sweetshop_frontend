import React from 'react'
import style from './genericmodal.module.css'



export default function GenericModal({ titleModal, textInfo, closeModal, actionToExecute }) {

    return (

        <div className={style.overlay}>
            <div className={style.container}>

                <h2 className={style.titleModal}>{titleModal}</h2>

                <div className={style.containerLabel}>
                <p className={style.mainLabel}>{textInfo}</p>
                </div>
                

                <div className={style.containerBtn}>

                    <button 
                    className={style.buttonModal}

                        onClick={closeModal}
                    >Não</button>

                    <button
                    className={style.buttonModal}
                        type="submit"
                        onClick={actionToExecute}

                    >Sim</button>
                </div>
            </div>
        </div>
    )
}