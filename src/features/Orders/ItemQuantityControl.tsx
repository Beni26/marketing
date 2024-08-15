const ItemQuantityControl = () => {
  return (
    <>
      {/* <button
        className="flex items-center justify-center w-11 h-11 border border-cl_border rounded-r-md bg-white"
        onClick={() =>
          setCount((prev) => (prev < maxCountReserve ? prev + 1 : prev))
        }
      >
        +
      </button>
      <div className="flex flex-col items-center justify-center w-11 h-11 border-t border-b border-cl_border bg-gray-100 text-sm">
        {toPersianNumbersWithComma(count)}
        {count === maxCountReserve && <span className="text-xs">حداکثر</span>}
      </div>
      <button
        className="flex items-center justify-center w-11 h-11 border border-cl_border rounded-l-md bg-white"
        onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : 1))}
      >
        -
      </button> */}
    </>
  );
};
export default ItemQuantityControl;
