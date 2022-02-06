import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Layout from './layout';
import LoadingOverlay from './loading-overlay';
import NewRecipeModal from './new-recipe-modal';
import SearchableRecipeList from './searchable-recipe-list';

export default function RecipesPage({ recipes, onRouteChange }) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [showNewRecipeModal, setShowNewRecipeModal] = useState(false);

  useEffect(() => setIsLoading(false), [recipes]);

  const addNewRecipe = () => {
    setShowNewRecipeModal(true);
  };

  const onNewRecipeModalClose = () => {
    setShowNewRecipeModal(false);
  };

  const onRecipeModalClose = () => {
    setCurrentRecipe(null);
  };

  const onSaveRecipe = (recipe) => {
    setIsLoading(true);

    const isNewRecipe = !recipe.id;
    const method = isNewRecipe ? 'POST' : 'PUT';
    const url = isNewRecipe ? `/api/recipes` : `/api/recipes/${recipe.id}`;

    fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recipe),
    }).then(() => router.replace(router.asPath));
  };

  const onDeleteRecipe = (recipe) => {
    setIsLoading(true);
    fetch('/api/recipes/' + recipe.id, {
      method: 'DELETE',
    }).then(() => router.replace(router.asPath));
  };

  const onRecipeClick = (recipe) => {
    setCurrentRecipe(recipe);
  };

  return (
    <Layout currentRoute={'recipes'} onRouteChange={onRouteChange}>
      {showNewRecipeModal && <NewRecipeModal onClose={onNewRecipeModalClose} onSaveRecipe={onSaveRecipe} />}
      {currentRecipe && (
        <NewRecipeModal
          onClose={onRecipeModalClose}
          onSaveRecipe={onSaveRecipe}
          onDeleteRecipe={onDeleteRecipe}
          recipe={currentRecipe}
        />
      )}
      {isLoading && <LoadingOverlay />}
      <div
        onClick={addNewRecipe}
        className="bg-indigo-500 rounded-full h-14 w-14 fixed z-10 bottom-0 right-0 mb-20 mr-4 shadow-lg flex items-center justify-center cursor-pointer"
      >
        <span className="material-icons text-white text-3xl">add</span>
      </div>
      <SearchableRecipeList xstyle="px-4" initialRecipes={recipes} onRecipeClick={onRecipeClick} />
    </Layout>
  );
}
