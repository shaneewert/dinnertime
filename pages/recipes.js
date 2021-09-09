import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Layout from '../components/layout';
import LoadingOverlay from '../components/loading-overlay';
import NewRecipeModal from '../components/new-recipe-modal';
import { PrismaClient } from '@prisma/client';
import SearchableRecipeList from '../components/searchable-recipe-list';
const prisma = new PrismaClient();

export default function Recipes({ recipes }) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, [recipes]);

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
    <Layout currentRoute="recipes" onPrimaryActionClick={addNewRecipe}>
      {showModal && <NewRecipeModal onClose={onNewRecipeModalClose} onCreateRecipe={onNewRecipeAdded} />}
      {isLoading && <LoadingOverlay />}
      <SearchableRecipeList initialRecipes={recipes} onRecipeClick={onRecipeClick} onRecipeDeleted={onRecipeDeleted} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const recipes = await prisma.recipe.findMany({
    select: {
      id: true,
      url: true,
      title: true,
      imageUrl: true,
    },
    orderBy: [
      {
        title: 'asc',
      },
    ],
  });
  return { props: { recipes: recipes } };
}
