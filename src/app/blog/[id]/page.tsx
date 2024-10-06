import { Section } from "@/components/layout/section";
import BlogItem from "../components/BlogItem";

const BLOG_ITEM = {
  title: "Заголовок",
  content: "Содержание",
  time: new Date("2021-09-01").toISOString(),
};

const SingleBlogPage = () => {
  return (
    <Section>
      <BlogItem {...BLOG_ITEM} />
    </Section>
  );
};

export default SingleBlogPage;
