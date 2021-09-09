export default function RecipeThumbnail({ recipe }) {
  if (recipe.imageUrl) {
    return (
      <div className="flex-shrink-0 h-14 w-14">
        <img className="object-cover w-full h-full" src={recipe.imageUrl} alt={recipe.title} loading="lazy" />
      </div>
    );
  } else {
    return <div className="flex-shrink-0 h-14 w-14 bg-gray-200"></div>;
  }
}
