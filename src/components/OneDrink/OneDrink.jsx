import React from 'react';
import styles from './OneDrink.module.css';



export default function OneDrink({ drink, index, switchDrink, attDados }) {

    return (
        <>
            <div key={index}
                className={styles.drink_box}
                onClick={() => {
                    switchDrink()
                    attDados(drink)
                }}>

                <div ><img src={drink.strDrinkThumb} alt={drink.strDrink} /> </div>
                <p className={styles.drink_p}> {drink.strDrink}</p>
            </div>
        </>
    )
}