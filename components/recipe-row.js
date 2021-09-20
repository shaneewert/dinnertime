import RecipeThumbnail from './recipe-thumbnail';

export default function RecipeRow({ recipe, onClick, onRecipeDeleted, xstyle }) {
  let didLongPress = false;
  let longPressTimer = null;

  const onMouseDown = () => {
    if (!onRecipeDeleted) return;
    didLongPress = false;
    longPressTimer = setTimeout(() => {
      didLongPress = true;
      onRecipeDeleted(recipe);
    }, 1000);
  };

  const onMouseUp = () => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      longPressTimer = null;
    }
  };

  const onRowClick = () => {
    if (didLongPress) {
      didLongPress = false;
    } else {
      onClick(recipe);
    }
  };

  return (
    <div
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={onMouseDown}
      onTouchEnd={onMouseUp}
      onClick={onRowClick}
      className={`flex items-center py-2 bg-white border-b border-gray-100 cursor-pointer select-none ${xstyle}`}
    >
      <RecipeThumbnail recipe={recipe} />
      <span className="ml-2 truncate">{recipe.title}</span>
    </div>
  );
}
