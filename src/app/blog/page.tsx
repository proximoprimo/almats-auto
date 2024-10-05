import { Section } from "@/components/layout/section";
import BlogFilter from "./components/BlogFilter";
import BlogItem from "./components/BlogItem";

const BLOG_ITEMS = [
  {
    title: "Заголовок",
    content:
      "ALMATS AUTO ALMATS AUTO ALMATS AUTO ALMATS AUTO ALMATS AUTO ALMATS AUTO ALMATS AUTO ALMATS AUTO ALMATS AUTO ALMATS AUTO ALMATS AUTO ALMATS AUTO ALMATS AUTO ALMATS AUTO ALMATS AUTO ALMATS AUTO ALMATS AUTO ALMATS AUTO",
    time: new Date("2021-09-01").toISOString(),
  },
  {
    title: "Заголовок",
    content: "Содержание",
    time: new Date("2021-09-01").toISOString(),
  },
  {
    title: "Заголовок",
    content: "Содержание",
    time: new Date("2021-09-01").toISOString(),
  },
];

const BlogPage = () => {
  const BlogList = BLOG_ITEMS.map((item) => (
    <BlogItem key={item.title} {...item} />
  ));

  return (
    <>
      <Section className="px-0">
        <BlogFilter />
      </Section>
      <Section>
        <div className="flex flex-col mt-12 gap-12">{BlogList}</div>
      </Section>
    </>
  );
};

export default BlogPage;
