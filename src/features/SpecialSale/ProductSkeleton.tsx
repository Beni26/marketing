import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSkeleton = () => {
  return (
    <div className="text-right">
      <div className="relative w-[253px] h-[197px]">
        <Skeleton height={190} width={253} className="rounded-xl" />
        <span className=" text-white font-bold text-xs p-0.5 pr-2 pl-2 rounded-lg absolute top-0 right-0 leading-[22px] ">
          <Skeleton height={10} width={26} />
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <Skeleton height={20} width={253} />

        <Skeleton height={20} width={253} />
      </div>
      <div className="flex justify-between items-center">
        <Skeleton height={20} width={150} />
        <Skeleton height={35} width={35} className="radu" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
