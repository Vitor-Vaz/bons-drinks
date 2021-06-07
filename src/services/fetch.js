
export async function UseSeachDrinks(name) {

    const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);

    const banana = await data.json();

    return banana.drinks;
};


export async function UseDrinksByCategory(category){
    
    const newCategory = category.replace(" ", "_");
    
    console.log(newCategory);

    const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${newCategory}`);
    
    console.log(data);

    const banana = await data.json();

    console.log(banana);

    return banana.drinks;
};

export async function UseDrinksAlcoholic(alcool){

    let newAlcool;

    if(alcool === 'Alcóolico'){
        newAlcool = 'Alcoholic';
    }else if(alcool === "Não Alcolico"){
        newAlcool = 'Non_Alcoholic';
    }

    const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${newAlcool}`);

    const banana = await data.json();

    return banana.drinks;
}

export async function UseDrinksGlass(glass){

    const newGlass = glass.replace(" ", "_");

    const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${newGlass}`);

    const banana = await data.json();

    return banana.drinks;
}
