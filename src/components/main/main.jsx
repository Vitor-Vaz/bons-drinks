import React from 'react';
import styles from './main.module.css';
import DrinkPic from '../../img/drink-main.jpg'
import Landing from '../lading/landing';


export default function Main() {


    
    return (
        <div className={styles.main}>   
        
            
            <Landing />
            <img src={DrinkPic} alt="Imagem da homepage" />
           
        </div>


    )
}


