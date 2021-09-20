import { useState, useEffect } from 'react';
import RecipeRow from '../components/recipe-row';
import SearchBar from '../components/search-bar';

export default function SearchableRecipeList({ initialRecipes, onRecipeClick, onRecipeDeleted, xstyle }) {
  const [renderedRecipes, setRenderedRecipes] = useState(initialRecipes);

  // you need to do this to ensure renderedRecipes matches recipes on reload
  // https://stackoverflow.com/a/54866051
  useEffect(() => {
    setRenderedRecipes(initialRecipes);
  }, [initialRecipes]);

  const onSearchChange = (newValue) => {
    const value = newValue || '';
    const searchTerm = value.trim().toLowerCase();
    const filteredRecipes = initialRecipes.filter((recipe) => {
      return recipe.title.toLowerCase().includes(searchTerm);
    });
    setRenderedRecipes(filteredRecipes);
  };

  return (
    <div>
      <SearchBar onChange={onSearchChange} />
      {renderedRecipes.map((recipe) => (
        <RecipeRow
          xstyle={xstyle}
          key={recipe.id}
          recipe={recipe}
          onClick={onRecipeClick}
          onRecipeDeleted={onRecipeDeleted}
        />
      ))}
    </div>
  );
}
