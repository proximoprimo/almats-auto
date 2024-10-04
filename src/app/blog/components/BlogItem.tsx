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
    <div className="bg-secondary rounded-2xl p-8">
      <div className="text-xl font-bold">{title}</div>
      <div className="mt-5 text-xl font-medium">{content}</div>
      <div className="opacity-70 mt-5 text-xl font-medium">{dateString}</div>
      <Button className="py-5 mt-5 rounded-full">Прочитать</Button>
    </div>
  );
};

export default BlogItem;
