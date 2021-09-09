import Modal from './modal';
import { useRef, useState } from 'react';

export default function NewRecipeModal({ onClose, onCreateRecipe }) {
  const urlRef = useRef(null);
  const titleRef = useRef(null);

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

        if (json.imageUrl) {
          setImageUrl(json.imageUrl);
        }
      })
      .finally(() => setIsLoading(!hasTitle()));
  };

  const onTitleChange = (e) => {
    setIsLoading(!hasTitle(e.target));
  };

  return (
    <Modal onClose={onClose}>
      <div>
        <h1 className="text-xl mb-5">New Recipe</h1>
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
          <p className="uppercase text-xs text-gray-400 mb-1">Image</p>
          <div className="h-44 w-44">
            {imageUrl ? (
              <img className="object-cover w-full h-full" src={imageUrl} alt="Main recipe image" loading="lazy" />
            ) : (
              <div className="bg-gray-200 w-full h-full"></div>
            )}
          </div>
        </div>
        <button
          onClick={onAddRecipeClick}
          disabled={isLoading}
          className="bg-indigo-500 w-full text-center text-white px-4 py-2 disabled:bg-indigo-300 disabled:cursor-not-allowed"
        >
          Add Recipe
        </button>
      </div>
    </Modal>
  );
}
