import RecipeThumbnail from './recipe-thumbnail';

export default function RecipeRow({ recipe, onClick, xstyle }) {
  return (
    <div
      onClick={() => onClick(recipe)}
      className={`flex items-center py-2 bg-white border-b border-gray-100 cursor-pointer select-none capitalize ${xstyle}`}
    >
      <RecipeThumbnail recipe={recipe} />
      <span className="ml-2 truncate">{recipe.title}</span>
    </div>
  );
}
