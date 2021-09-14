export default function BottomNav({ currentRoute, onRouteChange }) {
  const tabs = [
    {
      key: 'calendar',
      label: 'Calendar',
      materialIcon: 'today',
    },
    {
      key: 'recipes',
      label: 'Recipes',
      materialIcon: 'restaurant',
    },
  ];

  return (
    <div className="bg-indigo-500 flex justify-between shadow-md h-14">
      {tabs.map((tab) => {
        let className = 'w-full hover:text-white';
        if (tab.key === currentRoute) {
          className += ' text-white';
        } else {
          className += ' text-indigo-300';
        }

        return (
          <button onClick={() => onRouteChange(tab.key)} className={className} key={tab.key}>

              <span className="block material-icons text-lg">{tab.materialIcon}</span>
              <span className="block text-xs">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
