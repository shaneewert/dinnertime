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
      <div className="flex justify-between items-center mt-5">
        <button onClick={onClose} className="bg-gray-200 w-full text-center text-gray-500 px-4 py-2">
          Cancel
        </button>
      </div>
    </Modal>
  );
}
