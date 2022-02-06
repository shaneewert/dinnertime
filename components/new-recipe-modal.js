import Modal from './modal';
import { useRef, useState } from 'react';

export default function NewRecipeModal({ onClose, onSaveRecipe, onDeleteRecipe, recipe: maybeRecipe }) {
  const urlRef = useRef(null);
  const titleRef = useRef(null);
  const directionsRef = useRef(null);

  const [imageUrl, setImageUrl] = useState(maybeRecipe?.imageUrl);
  const [isLoading, setIsLoading] = useState(!maybeRecipe?.id);

  const hasTitle = (el) => {
    el = el || titleRef.current;
    return el.value.trim().length > 0;
  };

  const onSaveRecipeClick = () => {
    const newRecipe = {
      id: maybeRecipe?.id,
      url: urlRef.current.value,
      title: titleRef.current.value,
      imageUrl,
      description: directionsRef.current.value,
    };
    onSaveRecipe(newRecipe);
    onClose();
  };

  const onDeleteRecipeClick = () => {
    if (confirm('Are you sure?')) {
      onDeleteRecipe(maybeRecipe);
      onClose();
    }
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

  const maybeImage = () => {
    if (!maybeRecipe?.imageUrl) return null;

    return (
      <img className="object-cover w-full h-44" src={maybeRecipe?.imageUrl} alt={maybeRecipe?.title} loading="lazy" />
    );
  };

  const maybeDeleteButton = () => {
    if (!maybeRecipe?.id) return null;

    return (
      <button onClick={onDeleteRecipeClick} className="bg-red-100 mr-2 w-full text-center text-red-800 px-4 py-2">
        Delete
      </button>
    );
  };

  const maybeGoToWebsiteButton = () => {
    if (!maybeRecipe?.url) return null;

    return (
      <button
        onClick={() => {
          window.open(maybeRecipe.url);
        }}
        className="bg-gray-200 w-16 material-icons"
      >
        launch
      </button>
    );
  };

  const tile = maybeRecipe?.title || 'New Recipe';
  return (
    <Modal title={tile} onClose={onClose}>
      {maybeImage()}
      <div className="p-5">
        <div className="mb-5">
          <p className="uppercase text-xs text-gray-400 mb-1">Url</p>
          <div className="flex">
            <input
              onChange={onUrlChange}
              type="text"
              ref={urlRef}
              defaultValue={maybeRecipe?.url}
              className="bg-white w-full border outline-none px-2 py-1 font-light text-gray-600"
            />
            {maybeGoToWebsiteButton()}
          </div>
        </div>
        <div className="mb-5">
          <p className="uppercase text-xs text-gray-400 mb-1">Title</p>
          <input
            onChange={onTitleChange}
            type="text"
            ref={titleRef}
            defaultValue={maybeRecipe?.title}
            className="bg-white w-full border outline-none px-2 py-1 font-light text-gray-600"
          />
        </div>
        <div className="mb-5">
          <p className="uppercase text-xs text-gray-400 mb-1">Directions</p>
          <textarea
            ref={directionsRef}
            className="bg-white w-full h-24 border outline-none px-2 py-1 font-light text-gray-600 resize-none"
            defaultValue={maybeRecipe?.description}
          />
        </div>
        <div className="flex justify-between items-center">
          {maybeDeleteButton()}
          <button
            onClick={onSaveRecipeClick}
            disabled={isLoading}
            className="bg-indigo-500 w-full text-center text-white px-4 py-2 disabled:bg-indigo-300 disabled:cursor-not-allowed"
          >
            {maybeRecipe?.id ? 'Save Recipe' : 'Add Recipe'}
          </button>
        </div>
      </div>
    </Modal>
  );
}
