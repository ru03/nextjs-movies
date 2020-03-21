const Tabs = ({ activeTab = 0, onClick, tabs }) => {
  const tabClass = "bg-white inline-block py-2 px-4 text-blue-700 font-semibold";
  const activeTabClass = "border-l border-t border-r rounded-t"
  const activeLi = "-mb-px";
  return (
    <ul className="flex border-b">
      {tabs.length > 0 && tabs.map((tab, index) => {
        return (
          <li
            key={tab.id}
            className={
              index === activeTab
                ? `"-mb-px mr-1" ${activeLi}`
                : "-mb-px mr-1"
            }
            onClick={() => onClick && onClick(index)}
          >
            <span className={
              index === activeTab
                ? `${tabClass} ${activeTabClass}`
                : tabClass
            }
            >
              {tab.tabName}
            </span>
          </li>
        )
      })}
    </ul >
  );
}

export default Tabs;