import Image from "next/image";

const Map = () => {
  return (
    <div className="mt-7 lg:w-full lg:px-12 px-5">
      <Image className="lg:w-full lg:aspect-[12/5]" src="/temp/map.png" alt="map" width={1300} height={500} />
    </div>
  );
};

export default Map;
