import { useRef, useState } from 'react';

export default function SearchBar({ onChange }) {
  const [showClear, setShowClear] = useState(false);
  const inputRef = useRef(null);

  const onSearchChange = () => {
    const value = inputRef.current.value;
    setShowClear(!!value);
    onChange(value);
  }

  const clearClass = showClear ? '' : 'hidden';

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
        onChange={onSearchChange}
        className="flex-1 px-2 bg-transparent text-xl font-light text-gray-600 outline-none"
      />
      <span
        onClick={(e) => {
          if (inputRef.current) {
            inputRef.current.value = '';
            onSearchChange();
          }
        }}
        className={`material-icons cursor-pointer text-gray-400 text-2xl flex-shrink-0 ${clearClass}`}
      >
        close
      </span>
    </div>
  );
}
