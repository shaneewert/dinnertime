import SearchableRecipeList from './searchable-recipe-list';
import Modal from './modal';

export default function SelectRecipeModal({ title, onClose, onSelectRecipe, recipes }) {
  const onRecipeClick = (recipe) => {
    onSelectRecipe(recipe);
    onClose();
  };

  return (
    <Modal title="Select Recipe" onClose={onClose}>
      <div className="pb-2">
        <SearchableRecipeList initialRecipes={recipes} onRecipeClick={onRecipeClick} xstyle="px-5" />
      </div>
    </Modal>
  );
}
