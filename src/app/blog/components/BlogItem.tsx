import { Button } from "@/components/common";
import cn from "@/utils/cn";
import Link from "next/link";

interface BlogItemProps {
  title: string;
  content: string;
  time: string;
  className?: string;
}

const BlogItem = ({ content, time, title, className }: BlogItemProps) => {
  const dateString = new Date(time).toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
  });

  return (
    <div
      className={cn(
        "p-8 bg-background rounded-2xl lg:grid lg:grid-rows-[auto,216px,auto,auto]",
        className
      )}
    >
      <div className="text-xl font-bold text-white">{title}</div>
      <div className="text-balance mt-5 text-xl font-medium text-white truncate">
        {content}
      </div>
      <div className="opacity-70 mt-5 text-xl font-medium text-white">
        {dateString}
      </div>

      <Link href="/blog/1">
        <Button className="py-5 mt-5 rounded-full">Прочитать</Button>
      </Link>
    </div>
  );
};

export default BlogItem;
