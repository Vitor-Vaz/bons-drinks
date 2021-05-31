import { useState, useEffect } from 'react';

export default function useFetchDrinks(url) {


    const [drinks, setDrinks] = useState([]);

    useEffect(() => {

        const banana = async () => {
            const response = await ( await fetch(url)).json();
            setDrinks(response.drinks)
        }
        banana();

    }, [url]);


    return drinks;
}

