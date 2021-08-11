import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';

function Finder() {

    //Edmam (Recipe API) keys
    const API_ID = 'f18eb926';
    const API_KEY = '20f72656dd38718aa592c4f61a07932a';
    //const example = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=f18eb926&app_key=20f72656dd38718aa592c4f61a07932a`;

    //state of recipe app - will contain all info.
    const [recipes, setRecipes] = useState([]);

    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');
    let [count, setCount] = useState(0);

    let recipeId= 0;
  
    useEffect(() => {
    
        fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
            .then((response) => {
                response.json()
                .then((data) => {

                    if(data.hits.length === 0) {
                        alert(`We couldn't get anything for ${query}`);
                        setSearch('');
                    }
                    
                    console.log(data.hits);

                    //set state
                    setRecipes(data.hits);

                });
            })
            .catch((err) => {
                console.log(err);
            })
        
    }, [query]);

    function updateSearch(e) {
        setSearch(e.target.value);
    }

    function getRecipe(event) {
        event.preventDefault();
        
        setQuery(search);
        setCount(count + 1);
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-10 mx-auto">

                    <div className="recipeBox">
                
                        <h1 className={count <= 0 ? "text-primary fs-2 text-center mt-4" : "d-none"}>We have got you the recipes of Chicken!</h1>

                        <div className="search-bar">

                            <form onSubmit={getRecipe} className="search-form">
                                <div className="form-group w-100">
                                    <input type="text" className="form-control border-0 border-bottom" placeholder="Enter food"
                                        value={search} 
                                        onChange={updateSearch}
                                    />
                                </div>
                                <button type="submit" className="btn btn-success">Search</button>
                            </form>

                        </div>

                        <div className="dishes">
                            {recipes.map((recipe) => {
                                return(
                                    <Recipe key={++recipeId}
                                        label={recipe.recipe.label} 
                                        uri={recipe.recipe.uri}
                                        image={recipe.recipe.image} 
                                        ingredients={recipe.recipe.ingredients} />
                                );
                            })}
                        </div> 
                    </div>

                </div>
            </div>
        </div>
        
    )
}

export default Finder;
