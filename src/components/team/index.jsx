import React from 'react';
import styles from './styles.module.css'
import PersonCard from '../personCard'
import Barman from '../../img/barman1.jpg'
import Barwoman from '../../img/barwoman.jpg'
import Garcom from '../../img/garcom-hipster.jpg'
import Cachaceiro from '../../img/cachaceiro.jpg'

export default function Team(){


    return (
        <>
        <div className={styles.team}>
            <h2> Nossa equipe </h2>
            <PersonCard img={Barman} name={"Tony Stark"} />
            <PersonCard img={Barwoman} name={"Natasha Romanoff"} />
            <PersonCard img={Garcom} name={"Bruce Banner"} />
            <PersonCard img={Cachaceiro} name={"Steve Rogers"} />
        </div>
        </>
    )
}


