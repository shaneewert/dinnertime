import Modal from './modal';
import { useRef, useState } from 'react';

export default function NewRecipeModal({ onClose, onCreateRecipe }) {
  const urlRef = useRef(null);
  const titleRef = useRef(null);
  const directionsRef = useRef(null);

  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const hasTitle = (el) => {
    el = el || titleRef.current;
    return el.value.trim().length > 0;
  };

  const onAddRecipeClick = () => {
    const newRecipe = {
      url: urlRef.current.value,
      title: titleRef.current.value,
      imageUrl,
      description: directionsRef.current.value,
    };
    onCreateRecipe(newRecipe);
    onClose();
  };

  const onUrlChange = (e) => {
    const maybeUrl = e.target.value.trim();
    setIsLoading(!hasTitle());
    fetch('/api/parse-recipe?' + new URLSearchParams({ url: maybeUrl }))
      .then((r) => r.json())
      .then((json) => {
        if (json.title) {
          titleRef.current.value = json.title;
        }
        setImageUrl(json.imageUrl);
      })
      .finally(() => setIsLoading(!hasTitle()));
  };

  const onTitleChange = (e) => {
    setIsLoading(!hasTitle(e.target));
  };

  return (
    <Modal onClose={onClose}>
      <div>
        <div className="mb-5">
          <p className="uppercase text-xs text-gray-400 mb-1">Url</p>
          <input
            onChange={onUrlChange}
            type="text"
            ref={urlRef}
            className="bg-white w-full border outline-none px-2 py-1 font-light text-gray-600"
          />
        </div>
        <div className="mb-5">
          <p className="uppercase text-xs text-gray-400 mb-1">Title</p>
          <input
            onChange={onTitleChange}
            type="text"
            ref={titleRef}
            className="bg-white w-full border outline-none px-2 py-1 font-light text-gray-600"
          />
        </div>
        <div className="mb-5">
          <p className="uppercase text-xs text-gray-400 mb-1">Directions</p>
          <textarea
            ref={directionsRef}
            className="bg-white w-full h-24 border outline-none px-2 py-1 font-light text-gray-600 resize-none"
          ></textarea>
        </div>
        <div className="flex justify-between items-center">
          <button onClick={onClose} className="bg-gray-200 mr-2 w-full text-center text-gray-500 px-4 py-2">
            Cancel
          </button>
          <button
            onClick={onAddRecipeClick}
            disabled={isLoading}
            className="bg-indigo-500 w-full text-center text-white px-4 py-2 disabled:bg-indigo-300 disabled:cursor-not-allowed"
          >
            Add Recipe
          </button>
        </div>
      </div>
    </Modal>
  );
}
