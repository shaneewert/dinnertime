import { useRef } from 'react';

export default function SearchBar({ onChange }) {
  const inputRef = useRef(null);
  return (
    <div className="w-full flex bg-gray-100 px-2 py-1">
      <span
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }}
        className="material-icons cursor-pointer text-gray-400 text-2xl flex-shrink-0"
      >
        search
      </span>
      <input
        ref={inputRef}
        type="text"
        onChange={onChange}
        className="flex-1 px-2 bg-transparent text-xl font-light text-gray-600 outline-none"
      />
    </div>
  );
}
