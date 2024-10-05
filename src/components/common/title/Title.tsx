import cn from "@/utils/cn";

interface TitleProps {
  level?: number;
  children: React.ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({
  level = 3,
  children,
  className,
}: TitleProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag className={cn("text-5xl lg:text-6xl font-pioneer text-white", className)}>
      {children}
    </Tag>
  );
};

export default Title;
