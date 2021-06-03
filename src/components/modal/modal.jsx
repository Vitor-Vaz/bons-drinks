import React from 'react';
import styles from './modal.module.css';
import { RiCloseFill } from 'react-icons/ri'

export default function Modal({ dados, switchDrink }) {

    function getIngredients(drink) {
        const drinkEntries = Object.entries(drink);
        return drinkEntries
            .filter(([key, value]) => key.startsWith("strIngredient") && value && value.trim())
            .map(([key, value]) => value)
            .join(", ");
    }

    return (
        <div className={styles.container} >
            <div className={styles.modal_box}>
                <button className={styles.buttonClose} onClick={() => switchDrink()}><RiCloseFill/></button>
                <div> <img src={dados.strDrinkThumb} alt={dados.strDrink} /> </div>
                <div className={styles.description}>
                    <h4> {dados.strDrink}</h4>
                    <p>Copo: {dados.strGlass}</p>
                    <p>IBA:{dados.strIBA}</p>
                    <p>Ingredientes: {`${getIngredients(dados)}`}</p>
                    <p>Instruções: {dados.strInstructions} </p>
                </div>
            </div>
        </div>
    )
}