export default function Header({ title, onBack }) {
  const backButtonClass = onBack != null ? '' : 'invisible';
  return (
    <div className="bg-indigo-500 text-white h-12 flex justify-between items-center z-10 shadow-md">
      <button
        onClick={onBack}
        className={`h-full w-12 flex-shrink-0 flex justify-center items-center ${backButtonClass}`}
      >
        <i className="material-icons">arrow_back</i>
      </button>
      <p className="font-bold px-1 flex-grow text-center truncate">{title}</p>
      <button className="h-full w-12 flex-shrink-0 flex justify-center items-center invisible">
        <i className="material-icons">arrow_back</i>
      </button>
    </div>
  );
}
