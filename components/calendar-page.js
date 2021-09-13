import LoadingOverlay from './loading-overlay';
import SelectRecipeModal from './select-recipe-modal';
import dayjs from 'dayjs';
import DateRow from './date-row';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from './layout';

const DAY = 1000 * 60 * 60 * 24;

export default function CalendarPage({ recipes, dinners, onRouteChange }) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => setIsLoading(false), [recipes, dinners]);

  const onCloseModal = () => {
    setShowModal(false);
  };

  const onRecipeSelected = (recipe) => {
    // selectedDate is set in onDateClick
    setIsLoading(true);
    fetch('/api/dinners', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        recipe: recipe,
        date: selectedDate.format(),
      }),
    }).then(() => router.replace(router.asPath));
  };

  const onDinnerDeleted = (dinner) => {
    setIsLoading(true);
    fetch('/api/dinners/' + dinner.id, {
      method: 'DELETE',
    }).then(() => router.replace(router.asPath));
  };

  const onDateClick = (dayJsDate, recipe) => {
    if (recipe) {
      window.open(recipe.url, recipe.title);
    } else {
      setSelectedDate(dayJsDate);
      setShowModal(true);
    }
  };

  const beginningOfWeek = dayjs().startOf('week');
  const oneWeekLater = dayjs().endOf('week').add(1, 'week');

  // dinners are represented as a map from { YYYY-DD-MM -> dinner }
  const formattedDateToDinnerMap = {};
  dinners.forEach((dinner) => {
    dinner.recipe = recipes.find((recipe) => recipe.id === dinner.recipeId);
    formattedDateToDinnerMap[dinner.dinnerAt] = dinner;
  });

  // a day in the list consists of a date and an optional recipe
  let days = [];
  let currentDate = beginningOfWeek;
  while (currentDate < oneWeekLater) {
    const day = { date: currentDate };
    const formattedDate = currentDate.format('YYYY-MM-DD');
    day.dinner = formattedDateToDinnerMap[formattedDate];

    days.push(day);
    currentDate = currentDate.add(1, 'day');
  }

  return (
    <Layout currentRoute="calendar" onRouteChange={onRouteChange}>
      {showModal && <SelectRecipeModal onClose={onCloseModal} onSelectRecipe={onRecipeSelected} recipes={recipes} />}
      {isLoading && <LoadingOverlay />}
      {days.map((day) => {
        const key = day.date.startOf('day').toString();
        return (
          <DateRow
            key={key}
            dayJsDate={day.date}
            dinner={day.dinner}
            onClick={onDateClick}
            onDinnerDeleted={onDinnerDeleted}
          />
        );
      })}
    </Layout>
  );
}
