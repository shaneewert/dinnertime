import BottomNav from '../components/bottom-nav';
import RecipesPage from '../components/recipes-page';
import CalendarPage from '../components/calendar-page';
import Header from '../components/header';
import Head from 'next/head';
import dayjs from 'dayjs';
import { PrismaClient } from '@prisma/client';
import { useState } from 'react';
const prisma = new PrismaClient();

const DAY = 1000 * 60 * 60 * 24;

export default function Home({ recipes, dinners }) {
  const [currentRoute, setCurrentRoute] = useState('calendar');

  const routeToTitles = {
    calendar: 'Calendar',
    recipes: 'Recipes',
  };

  const page = () => {
    switch (currentRoute) {
      case 'calendar':
        return <CalendarPage recipes={recipes} dinners={dinners} />;
      case 'recipes':
        return <RecipesPage recipes={recipes} />;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Dinner Time</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="touch-icon-iphone.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="touch-icon-ipad.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="touch-icon-iphone-retina.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="touch-icon-ipad-retina.png" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no"></meta>
        <meta name="apple-mobile-web-app-title" content="Dinner Time"></meta>
      </Head>

      <Header title={routeToTitles[currentRoute]} />
      <main className="flex-1 overflow-y-auto bg-gray-200">{page()}</main>
      <BottomNav currentRoute={currentRoute} onRouteChange={setCurrentRoute} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const recipes = await prisma.recipe.findMany({
    select: {
      id: true,
      url: true,
      title: true,
      imageUrl: true,
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
