import SearchableRecipeList from './searchable-recipe-list';
import Modal from './modal';

export default function SelectRecipeModal({ onClose, onSelectRecipe, recipes }) {
  const onRecipeClick = (recipe) => {
    onSelectRecipe(recipe);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <div class="pb-2">
        <SearchableRecipeList initialRecipes={recipes} onRecipeClick={onRecipeClick} xstyle="px-5" />
      </div>
    </Modal>
  );
}
