import React, { useState } from 'react';
import styles from './styles.module.css';
import OneDrink from '../../components/OneDrink/OneDrink';
import Modal from '../../components/modal/modal'
import useFetchDrinks from '../../hooks/useFetchDrinks';

export default function Drinks() {


    const [visible, setVisible] = useState(false);
    const [dados, setDados] = useState({});

    const Alldrinks = useFetchDrinks(process.env.REACT_APP_API_URL);

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

