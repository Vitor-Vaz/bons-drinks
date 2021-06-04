import React from 'react';
import styles from './header.module.css'
import { Link } from 'react-router-dom';

export default function Header({ coisas }) {


    return (
        <header className={styles.header}>

            <nav className={styles.selections}>
                <Link to='/drinks/populares' style={{ textDecoration: 'none' }} >
                    <li>Drinks</li>
                </Link>

                <Link to='/contact' style={{ textDecoration: 'none' }}>
                    <li>Contato</li>
                </Link>

                <Link to='/' style={{ textDecoration: 'none' }}>
                    <li className={styles.nameMain}>Home</li>
                </Link>

                <Link to='/about' style={{ textDecoration: 'none' }}>
                    <li>Sobre nós</li>
                </Link>

                <Link to='/team' style={{ textDecoration: 'none' }}>
                    <li>Time </li>
                </Link>
            </nav>
        </header>

    )
}

