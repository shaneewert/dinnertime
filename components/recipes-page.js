import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Layout from './layout';
import LoadingOverlay from './loading-overlay';
import NewRecipeModal from './new-recipe-modal';
import SearchableRecipeList from './searchable-recipe-list';

export default function RecipesPage({ recipes, onRouteChange }) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => setIsLoading(false), [recipes]);

  const addNewRecipe = () => {
    setShowModal(true);
  };

  const onNewRecipeModalClose = () => {
    setShowModal(false);
  };

  const onNewRecipeAdded = (recipe) => {
    setIsLoading(true);
    fetch('/api/recipes', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recipe),
    }).then(() => router.replace(router.asPath));
  };

  const onRecipeDeleted = (recipe) => {
    setIsLoading(true);
    fetch('/api/recipes/' + recipe.id, {
      method: 'DELETE',
    }).then(() => router.replace(router.asPath));
  };

  const onRecipeClick = (recipe) => {
    window.open(recipe.url, recipe.title);
  };

  return (
    <Layout currentRoute={'recipes'} onRouteChange={onRouteChange}>
      {showModal && <NewRecipeModal onClose={onNewRecipeModalClose} onCreateRecipe={onNewRecipeAdded} />}
      {isLoading && <LoadingOverlay />}
      <div
        onClick={addNewRecipe}
        className="bg-indigo-500 rounded-full h-14 w-14 fixed z-20 bottom-0 right-0 mb-20 mr-4 shadow-lg flex items-center justify-center cursor-pointer"
      >
        <span className="material-icons text-white text-3xl">add</span>
      </div>
      <SearchableRecipeList initialRecipes={recipes} onRecipeClick={onRecipeClick} onRecipeDeleted={onRecipeDeleted} />
    </Layout>
  );
}
