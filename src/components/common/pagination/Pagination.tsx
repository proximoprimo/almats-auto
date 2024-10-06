const Pagination = () => {
  return (
    <div className="items-center mt-12 text-xl text-black justify-items-center grid grid-cols-[repeat(6,50px)] justify-center">
      <div className="flex items-center justify-center w-12 h-12 rounded bg-foreground">
        1
      </div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>...</div>
      <div>99</div>
    </div>
  );
};

export default Pagination;
