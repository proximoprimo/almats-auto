import { Section } from "@/components/layout/section";
import { BlogFilter } from "./components/BlogFilter";
import BlogItem from "./components/BlogItem";
import cn from "@/utils/cn";
import { Pagination } from "@/components/common/pagination";

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
  const BlogList = BLOG_ITEMS.map((item, index) => (
    <BlogItem
      key={item.title}
      {...item}
      className={cn({ "col-start-2 col-end-4": index === 1 || index === 6 })}
    />
  ));

  return (
    <>
      <Section className="xl:px-0 px-0">
        <BlogFilter />
      </Section>
      <Section>
        <div className="lg:grid lg:grid-cols-2 xl:grid-cols-3 flex flex-col gap-12 mt-12">
          {BlogList}
        </div>
      </Section>
      <Section>
        <Pagination />
      </Section>
    </>
  );
};

export default BlogPage;
