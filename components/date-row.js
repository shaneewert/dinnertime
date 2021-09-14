import dayjs from 'dayjs';
import { useRef } from 'react';
import RecipeThumbnail from './recipe-thumbnail';

export default function DateRow({ dayJsDate, dinner, onClick, onDinnerDeleted }) {
  const ref = useRef(null);
  const recipe = dinner?.recipe;

  const today = dayjs().startOf('day');
  const beforeToday = dayJsDate.isBefore(today);
  const yesterday = beforeToday && dayJsDate.isAfter(today.subtract(2, 'day'));

  let bg = 'bg-white';
  let fg = 'text-gray-800;';
  if (today.isSame(dayJsDate, 'day')) {
    bg = 'bg-indigo-100';
  } else if (beforeToday) {
    bg = 'bg-gray-100';
    fg = 'text-gray-400';
  }

  const auxiliary = () => {
    if (recipe && recipe.imageUrl) {
      return <RecipeThumbnail recipe={recipe} />;
    } else if (!recipe && !beforeToday) {
      return (
        <div className="flex-shrink-0 flex items-center justify-center border-2 border-dashed border-gray-300 h-14 w-14">
          <span className="material-icons text-gray-300">add</span>
        </div>
      );
    }
  };

  const title = () => {
    if (recipe) {
      return <span className="truncate">{recipe.title}</span>;
    } else if (!beforeToday) {
      return <span className="truncate italic font-light text-gray-400">Add recipe</span>;
    }
  };

  // default scroll position puts yesterday at the top of the list
  if (yesterday) {
    // ref.current is not guaranteed to be non null
    setTimeout(() => ref.current && ref.current.scrollIntoView(true));
  }

  let didLongPress = false;
  let longPressTimer = null;

  const onMouseDown = () => {
    if (!recipe) return;
    didLongPress = false;
    longPressTimer = setTimeout(() => {
      didLongPress = true;
      onDinnerDeleted(dinner);
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
      onClick(dayJsDate, recipe);
    }
  };

  return (
    <div
      ref={ref}
      onClick={onRowClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={onMouseDown}
      onTouchEnd={onMouseUp}
      className={`py-2 px-4 flex border-b border-gray-100 cursor-pointer select-none ${bg}`}
    >
      <div className="flex flex-shrink-0 flex-col items-center border border-gray-300 h-14 w-14">
        <span className="uppercase text-xs text-gray-400">{dayJsDate.format('MMM')}</span>
        <span className={`text-3xl ${fg} font-light`}>{dayJsDate.format('D')}</span>
      </div>
      <div className={`flex flex-col flex-1 min-w-0 mx-2 ${fg}`}>
        <span className="uppercase text-xs text-gray-400">{dayJsDate.format('dddd')}</span>
        {title()}
      </div>
      {auxiliary()}
    </div>
  );
}
