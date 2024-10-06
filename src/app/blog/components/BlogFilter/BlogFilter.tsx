import DesktopBlogFilter from "./DesktopBlogFilter";
import MobileBlogFilter from "./MobileBlogFilter";

const BlogFilter = () => {
  return (
    <div className="bg-background text-foreground flex justify-between p-5 lg:p-0 lg:py-2.5 font-semibold gap-2.5">
      <MobileBlogFilter />
      <DesktopBlogFilter />
    </div>
  );
};

export default BlogFilter;
