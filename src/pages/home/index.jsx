import React from 'react';
import styles from './styles.module.css';
import DrinkPic from '../../img/barman.jpeg'
import Landing from '../../components/lading/landing';

export default function Home() {

    return (
        <div className={styles.main}>   
            <Landing />
            <img src={DrinkPic} alt="Imagem da homepage" />
        </div>
    )
}


