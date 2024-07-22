

export const Discount = () => {
  return (
    <div className="flex gap-3">
      <input
        type="text"
        className="p-3  rounded-lg text-secondary  
                  border-[2px] border-cl_border
                   focus:border-accent focus:border-b-primary transition-all duration-300 ease-in-out"
      />
      <button className="bg-primary hover:opacity-80 p-3 text-center text-white rounded-md text-sm">
        اعمال کد تخفیف
      </button>
    </div>
  );
};
