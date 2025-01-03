import React, { useState } from 'react';
import axios from 'axios';
import './css/main.css';

function Main() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [isSearched, setIsSearched] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const SPOONACULAR_API_KEY = '3f27652e9d0d416290668f31a7c44c3a';

  const searchRecipes = (type) => {
    // Clear previous results and reset state
    setRecipes([]);
    setIsSearched(false);
    setLoading(true);
    setErrorMessage('');

    if (type === 'name') {
      // Validate that the query does not contain commas
      if (query.trim().includes(',')) {
        setErrorMessage('Please enter a single recipe name without commas.');
        setLoading(false);
        return;
      }

      if (!query.trim()) {
        setErrorMessage('Please enter a recipe name.');
        setLoading(false);
        return;
      }

      // Clear ingredients when searching by name
      setIngredients('');

      axios
        .get(`https://api.spoonacular.com/recipes/complexSearch`, {
          params: {
            query: query,
            cuisine: 'Indian',
            apiKey: SPOONACULAR_API_KEY,
          },
        })
        .then((response) => {
          setRecipes(response.data.results || []);
          setIsSearched(true);
        })
        .catch((error) => {
          console.error('Error fetching recipes by name:', error);
          setErrorMessage('Error fetching recipes. Please try again later.');
        })
        .finally(() => setLoading(false));
    } else if (type === 'ingredients') {
      if (!ingredients.trim()) {
        setErrorMessage('Please enter ingredients.');
        setLoading(false);
        return;
      }

      // Clear query when searching by ingredients
      setQuery('');

      axios
        .get(`https://api.spoonacular.com/recipes/findByIngredients`, {
          params: {
            ingredients: ingredients,
            apiKey: SPOONACULAR_API_KEY,
          },
        })
        .then((response) => {
          setRecipes(response.data || []);
          setIsSearched(true);
        })
        .catch((error) => {
          console.error('Error fetching recipes by ingredients:', error);
          setErrorMessage('Error fetching recipes. Please try again later.');
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <div className="content">
      <div className="row">
        <div className="col">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by recipe name"
          />
          <button onClick={() => searchRecipes('name')}>Find Recipes</button>
        </div>

        <div className="col">
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Search by ingredients (comma separated)"
          />
          <button onClick={() => searchRecipes('ingredients')}>Find Recipes</button>
        </div>

        <div className="col error">
          {errorMessage && (
            <div className="error-box">
              <p>{errorMessage}</p>
            </div>
          )}
          {loading ? (
            <div className="loading-animation">Loading...</div>
          ) : isSearched && recipes.length === 0 ? (
            <p>No recipes found. Please try again!</p>
          ) : (
            <ul className="recipe">
              {recipes.map((recipe, index) => (
                <li key={index}>
                  <a
                    href={`https://spoonacular.com/recipes/${recipe.title}-${recipe.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {recipe.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
