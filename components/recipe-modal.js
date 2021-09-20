import Modal from './modal';

export default function RecipeModal({ recipe, onClose }) {
  return (
    <Modal onClose={onClose}>
      <h1 className="capitalize text-xl mb-3">{recipe.title}</h1>
      <p className="whitespace-pre-line">{recipe.description}</p>
      <div className="flex justify-between items-center mt-5">
        <button onClick={onClose} className="bg-gray-200 w-full text-center text-gray-500 px-4 py-2">
          Cancel
        </button>
      </div>
    </Modal>
  );
}
