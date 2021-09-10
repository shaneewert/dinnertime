export default function Header({ title }) {
  return (
    <div className="bg-indigo-500 text-white h-12 flex justify-center font-bold items-center z-10 shadow-md">
      <p>{title}</p>
    </div>
  );
}
