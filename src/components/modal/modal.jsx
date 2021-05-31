import React from 'react';
import styles from './modal.module.css';

export default function Modal({ dados, switchDrink }) {



    return (

        <div className={styles.container} onClick={() => switchDrink()}>

            <div className={styles.modal_box}>

                <div> <img src={dados.foto} alt={dados.nome} /> </div>

                <div className={styles.description}>
                <h4> {dados.nome}</h4>
                <p>Receita: </p>
                <p>Copo: </p>
                <p>IBA:</p>
                <p>Ingredientes: </p>
                <p>Instruções: </p>
                </div>
                

            </div>


        </div>

    )
}