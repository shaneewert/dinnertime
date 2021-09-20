import RecipesPage from '../components/recipes-page';
import CalendarPage from '../components/calendar-page';
import dayjs from 'dayjs';
import { PrismaClient } from '@prisma/client';
import { useState } from 'react';
const prisma = new PrismaClient();

const DAY = 1000 * 60 * 60 * 24;

export default function Home({ recipes, dinners }) {
  const [currentRoute, setCurrentRoute] = useState('calendar');

  switch (currentRoute) {
    case 'calendar':
      return <CalendarPage recipes={recipes} dinners={dinners} onRouteChange={setCurrentRoute} />;
    case 'recipes':
      return <RecipesPage recipes={recipes} onRouteChange={setCurrentRoute} />;
    default:
      return null;
  }
}

export async function getServerSideProps(context) {
  const recipes = await prisma.recipe.findMany({
    select: {
      id: true,
      url: true,
      title: true,
      imageUrl: true,
      description: true,
    },
    orderBy: [
      {
        title: 'asc',
      },
    ],
  });

  // 1 day padding to ensure we have all the dinners this week
  const beginningOfWeek = dayjs().startOf('week').subtract(1, 'day');
  const oneWeekLater = dayjs().endOf('week').add(1, 'week').add(1, 'day');
  const dinners = await prisma.dinner.findMany({
    select: {
      id: true,
      dinnerAt: true,
      recipeId: true,
    },
    where: {
      AND: [
        {
          dinnerAt: {
            gt: beginningOfWeek.format(),
          },
        },
        {
          dinnerAt: {
            lt: oneWeekLater.format(),
          },
        },
      ],
    },
  });

  // https://codegregg.com/tinywins/2021/nextjs-date-type-static-props/
  const serializedDinners = dinners.map((dinner) => {
    return {
      ...dinner,
      dinnerAt: dayjs(dinner.dinnerAt).format('YYYY-MM-DD'),
    };
  });
  return { props: { recipes, dinners: serializedDinners } };
}
