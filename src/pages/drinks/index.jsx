import React from 'react';
import styles from './styles.module.css';
import DrinksPop from '../../components/DrinksPop';
import DrinksSearch from '../../components/DrinksSearch';
import { Switch, Route, NavLink } from 'react-router-dom';


export default function Drinks() {

    return (
        <div className={styles.main} >
            <nav className={styles.nav}>
                <NavLink 
                style={{textDecoration:"none"}}
                to='/drinks/populares'>
                   <button  className={styles.p}> Populares  </button> 
                </NavLink>

                <NavLink 
                style={{textDecoration:"none"}}
                to='/drinks/pesquisar'>
                   <button className={styles.p}> Pesquisar </button>  
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
