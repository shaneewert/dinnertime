import { useRouter } from 'next/router';

export default function BottomNav({ currentRoute }) {
  const router = useRouter();

  const tabs = [
    {
      key: 'calendar',
      label: 'Calendar',
      materialIcon: 'today',
      route: '/',
    },
    {
      key: 'recipes',
      label: 'Recipes',
      materialIcon: 'restaurant',
      route: '/recipes',
    },
  ];

  return (
    <div className="bg-indigo-500 flex justify-between shadow-md h-16">
      {tabs.map((tab) => {
        let className = 'py-3 w-full hover:text-white';
        if (tab.key === currentRoute) {
          className += ' text-white';
        } else {
          className += ' text-indigo-300';
        }

        return (
          <button
            onClick={() => {
              router.push(tab.route);
            }}
            className={className}
            key={tab.key}
          >
            <div className="flex flex-col">
              <span className="material-icons">{tab.materialIcon}</span>
              <span className="text-xs">{tab.label}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
