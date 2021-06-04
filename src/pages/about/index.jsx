import React from 'react';
import styles from './styles.module.css';
import AboutUs from '../../components/aboutUs'

export default function Home() {

    return (
        <div className={styles.main}>   
            <AboutUs />
        </div>
    )
}