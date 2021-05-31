import React, { useState } from 'react';
import styles from './drinks.module.css';
import OneDrink from '../OneDrink/OneDrink';
import Modal from '../modal/modal';
import useFetchDrinks from '../../hooks/useFetchDrinks';

export default function Drinks() {


    const [visible, setVisible] = useState(false);
    const [dados, setDados] = useState({});

    const Alldrinks = useFetchDrinks('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');

    function showDrink() {
        if (visible == true) {
            return <Modal dados={dados} switchDrink={switchDrink} />
        }
    }


    function switchDrink() {
        setVisible(!visible);
    }

    function attDados(valores) {
        setDados({ ...valores });
    }

    return (
        <div className={styles.main} >
            {Alldrinks.map((drink, index) => {
                return <OneDrink drink={drink} key={index} index={index} switchDrink={switchDrink} attDados={attDados} />
            })
            }
            {showDrink()}
        </div>
    )
}

