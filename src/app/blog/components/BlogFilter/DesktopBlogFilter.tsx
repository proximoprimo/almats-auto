import Image from "next/image";

const FILTER_OPTIONS = [
  "Лучшие",
  "Новости",
  "Новинки",
  "Статьи",
  "Для новых пользователей",
  "Рекомендации",
  "Советы",
];

const DesktopBlogFilter = () => {
  return (
    <div className="items-center hidden w-full px-12 lg:flex gap-5">
      <div className="flex flex-wrap gap-5">
        {FILTER_OPTIONS.map((option) => (
          <div
            key={option}
            className="flex items-center justify-start h-16 text-sm font-bold text-black rounded-full bg-foreground lg:px-6 xl:px-7"
          >
            {option}
          </div>
        ))}
      </div>

      <Image
        className="ml-auto"
        src="/icons/search.svg"
        alt=""
        width={60}
        height={60}
      />
    </div>
  );
};

export default DesktopBlogFilter;
