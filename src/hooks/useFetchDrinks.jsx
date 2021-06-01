import api from '../services/api';
import { useState, useEffect, useCallback } from 'react';

export default function useFetchDrinks(url) {

    const [drinks, setDrinks] = useState([]);
    useEffect(() => {

        const pickItem = async () => {
            const { data } = await api.get(url)
            setDrinks(data.drinks);
        }
        pickItem();

    }, [url]);

    return drinks;
}

