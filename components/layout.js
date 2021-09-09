import BottomNav from './bottom-nav';
import Header from './header';
import Head from 'next/head';

export default function Layout({ currentRoute, onPrimaryActionClick, children }) {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Dinner Time</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no"></meta>
      </Head>

      <Header currentRoute={currentRoute} />
      <main className="flex-1 overflow-y-auto bg-gray-200">
        {onPrimaryActionClick && (
          <div
            onClick={onPrimaryActionClick}
            className="bg-indigo-500 rounded-full h-14 w-14 fixed z-20 bottom-0 right-0 mb-20 mr-4 shadow-lg flex items-center justify-center cursor-pointer"
          >
            <span className="material-icons text-white text-3xl">add</span>
          </div>
        )}
        {children}
      </main>
      <BottomNav currentRoute={currentRoute} />
    </div>
  );
}
