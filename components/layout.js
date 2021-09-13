import BottomNav from '../components/bottom-nav';
import Header from '../components/header';
import Head from 'next/head';

export default function Layout({ currentRoute, onRouteChange, children }) {
  const routeToTitles = {
    calendar: 'Calendar',
    recipes: 'Recipes',
  };

  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Dinner Time</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no"></meta>
        <meta name="apple-mobile-web-app-title" content="Dinner Time"></meta>
      </Head>
      <Header title={routeToTitles[currentRoute]} />
      <main className="flex-1 overflow-y-auto bg-gray-200">{children}</main>
      <BottomNav currentRoute={currentRoute} onRouteChange={onRouteChange} />
    </div>
  );
}
