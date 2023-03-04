const NewsItem = ({ item }) => {
  return (
    <li className="ml-4 mb-2">
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {new Date(item.pubDate).toLocaleString("vi-VN")}
      </time>
			<a href={item.link} target="_blank">
				<h3 className="text-lg font-semibold text-gray-900 ">
					{item.title}
				</h3>
			</a>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
				{item.contentSnippet}
      </p>
    </li>
  );
};

export default NewsItem;
