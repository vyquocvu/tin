const Tabs = () => {
  const tabs = [
    { text: "Trang chủ", name: "tin-moi-nhat" },
    { text: "Thế giới", name: "the-gioi" },
    { text: "Kinh doanh", name: "kinh-doanh" },
    { text: "Thời sự", name: "thoi-su" },
  ];
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mb-4">
      <ul className="flex flex-wrap -mb-px">
        {tabs.map((tab) => (
          <li key={tab.name} className="mr-2">
            <a
              href={`/?tin=${tab.name}`}
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              {tab.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
