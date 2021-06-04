import React from 'react';
import styles from './styles.module.css'


export default function PersonCard({ img, name }) {


    return (
        <div className={styles.card}>
            <img src={img} alt={name} />

            <div>
                <h3>{name}</h3>
                <p> Nunc varius arcu tortor, sit amet rutrum urna facilisis id. Mauris mattis in massa et condimentum. Proin dui leo, volutpat sed turpis a, malesuada commodo.</p>
            </div>

        </div>
    )
}