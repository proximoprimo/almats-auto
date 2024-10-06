import { Button } from "@/components/common";

interface BlogItemProps {
  title: string;
  content: string;
  time: string;
}

const BlogItem = ({ content, time, title }: BlogItemProps) => {
  const dateString = new Date(time).toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
  });

  return (
    <div className="p-8 bg-background rounded-2xl">
      <div className="text-xl font-bold">{title}</div>
      <div className="mt-5 text-xl font-medium">{content}</div>
      <div className="mt-5 text-xl font-medium opacity-70">{dateString}</div>
      <Button className="py-5 mt-5 rounded-full">Прочитать</Button>
    </div>
  );
};

export default BlogItem;
