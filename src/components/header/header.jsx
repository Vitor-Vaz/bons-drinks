import React, { useEffect, useState } from 'react';
import styles from './header.module.css'
import { Link } from 'react-router-dom';
import { FaAlignJustify } from "react-icons/fa";
import useWindowSize from '../../hooks/useWindowSize'
import { NavLink } from 'react-router-dom';

export default function Header() {


    const [responsiveMenu, setResponsiveMenu] = useState(true);

    const [height] = useWindowSize();

    useEffect(() => {
        const verifySize = () => {
            if (height > 768) {
                setResponsiveMenu(true)
            }
        }
        verifySize();
    }, [height])

    console.log(responsiveMenu);

    return (
        <header className={styles.header}>

            <div className={styles.hamburguerDiv}>
                <NavLink exact to='/' style={{ textDecoration: 'none'}} > <h2 > Drink's Master</h2>  </NavLink> 
                <FaAlignJustify className={styles.hamburguer} onClick={() => setResponsiveMenu(!responsiveMenu)} />
            </div>

            <nav className={responsiveMenu ? styles.selections : styles.selections_click}>

                <Link to='/drinks/populares' style={{ textDecoration: 'none', color: "whitesmoke" }} onClick={() => setResponsiveMenu(true)} >
                    <li>Drinks</li>
                </Link>

                <Link to='/contact' style={{ textDecoration: 'none', color: "whitesmoke" }} onClick={() => setResponsiveMenu(true)} >
                    <li>Contato</li>
                </Link>

                <Link to='/' style={{ textDecoration: 'none', color: "whitesmoke" }}  onClick={() => setResponsiveMenu(true)} >
                    <li className={styles.nameMain}>Home</li>
                </Link>

                <Link to='/about' style={{ textDecoration: 'none', color: "whitesmoke" }} onClick={() => setResponsiveMenu(true)} >
                    <li>Sobre nós</li>
                </Link>

                <Link to='/team' style={{ textDecoration: 'none', color: "whitesmoke" }} onClick={() => setResponsiveMenu(true)} >
                    <li>Time </li>
                </Link>
            </nav>
        </header>

    )
}

