import React from 'react';
import styles from './styles.module.css';
import DrinksPop from '../../components/DrinksPop/DrinksPop';
import DrinksSearch from '../../components/DrinksSearch';
import { Switch, Route, NavLink } from 'react-router-dom';


export default function Drinks() {

    return (
        <div className={styles.main} >
            <nav className={styles.nav}>
                <NavLink 
                style={{textDecoration:"none"}}
                to='/drinks/populares'>
                   <p className={styles.p}> Drinks Populares   </p> 
                </NavLink>

                <NavLink 
                style={{textDecoration:"none"}}
                to='/drinks/pesquisar'>
                   <p className={styles.p}> Pesquisar </p>  
                </NavLink>
            </nav>


            <Switch>
                <Route exact path='/drinks/populares'>
                    <DrinksPop />
                </Route>

                <Route path='/drinks/pesquisar'>
                    <DrinksSearch />
                </Route>
            </Switch>
        </div>
    )
}
