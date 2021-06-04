import React, { useState } from 'react';
import styles from './styles.module.css';
import { UseSeachDrinks, UseDrinksAlcoholic, UseDrinksByCategory, UseDrinksGlass } from '../../services/fetch';
import Modal from '../modal/modal';
import OneDrink from '../OneDrink/OneDrink';
import { RiSearchEyeLine } from 'react-icons/ri'


export default function DrinksSearch() {

    const [pesquisa, setPesquisa] = useState("");
    const [drinks, setDrinks] = useState([]);
    const [visible, setVisible] = useState(false);
    const [dados, setDados] = useState({});
    const [category, setCategory] = useState([]);
    const [verificaCat, setVerificaCat] = useState("");

    async function search() {
        const data = await UseSeachDrinks(pesquisa);
        setDrinks(data)
    }

    function showDrink() {
        if (visible === true) {
            return <Modal dados={dados} switchDrink={switchDrink} />
        }
    }


    function switchDrink() {
        setVisible(!visible);
    }

    function attDados(valores) {
        setDados({ ...valores });
    }

    function subCategory(cat) {
        if (cat === 'Alcóolico') {
            setCategory(["Alcóolico", "Não Alcolico"]);
        } else if (cat === 'Categoria') {
            setCategory(["Ordinary Drink", "Cocktail", "Cocoa", "Shot", "Milk/Float Shake", "Other/Unknown", "Coffe/Tea", "Homemade Liqueur", "Punch/Party Drink", "Beer", "Soft Drink/Soda"]);
        } else if (cat === 'Copo') {
            setCategory(["Highball glass", "Cocktail glass", "Old-fashioned glass", "Colin glass", "Champagne flute"]);
        }


    }

    async function filterDrinks(event) {
        if (verificaCat === "Alcóolico") {
            const data = await UseDrinksAlcoholic(event.target.value);
            setDrinks(data);
        } else if (verificaCat === "Categoria") {
            const data = await UseDrinksByCategory(event.target.value);

            setDrinks(data);
        } else if (verificaCat === "Copo") {
            const data = await UseDrinksGlass(event.target.value);
            setDrinks(data);
        }
    }


    return (
        <div className={styles.drinkSearchMain}>

            <div className={styles.drinkSearchItems} >

                <select onChange={(event) => {
                    subCategory(event.target.value);
                    setVerificaCat(event.target.value);
                }}
                    className={styles.drinkSelectItems}
                >
                    <option selected disabled> Selecione </option>
                    <option> Alcóolico </option>
                    <option> Categoria </option>
                    <option> Copo </option>
                </select>

                <select onChange={filterDrinks} className={styles.drinkSelectItems} >
                    <option selected disabled > Selecione </option>
                    {category.map((catego, index) => {
                        return (
                            <option key={index}> {catego} </option>
                        )
                    })}
                </select>

                <input
                    className={styles.inputSearch}
                    onBlur={event => {
                        event.preventDefault();
                        setPesquisa(event.target.value);
                    }
                    }
                    type="text"
                    placeholder="Pesquise a bebida"
                />
                <button
                    className={styles.inputbutton}
                    onClick={search}
                > <RiSearchEyeLine />
                </button>


            </div>

            <div className={styles.drinkResults}>
                {drinks ? ( drinks.map((drink, index) => {
                    return <OneDrink drink={drink} key={index} index={index} switchDrink={switchDrink} attDados={attDados} />
                })
                ) : <h2> Não foi encontrado nada para "{pesquisa}" </h2>}
            </div>

            {showDrink()}
        </div>
    )
}

