import SearchableRecipeList from './searchable-recipe-list';
import Modal from './modal';

export default function SelectRecipeModal({ onClose, onSelectRecipe, recipes }) {
  const onRecipeClick = (recipe) => {
    onSelectRecipe(recipe);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <SearchableRecipeList initialRecipes={recipes} onRecipeClick={onRecipeClick} />
    </Modal>
  );
}
