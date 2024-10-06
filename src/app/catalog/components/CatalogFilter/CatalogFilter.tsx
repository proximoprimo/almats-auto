import DesktopFilterBlock from "./DesktopFilterBlock";
import MobileFilterBlock from "./MobileFilterBlock";

const CatalogFilter = () => {
  return (
    <div className="bg-background text-foreground flex justify-between p-5 font-semibold gap-2.5">
      <MobileFilterBlock />
      <DesktopFilterBlock />
    </div>
  );
};

export default CatalogFilter;
