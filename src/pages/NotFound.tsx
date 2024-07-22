import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";

const NotFound = () => {
    const moveBack = useMoveBack()
  return (
    <div className="container xl:max-w-screen-xl mb-20 pl-4 pr-4 md:pl-0 md:pr-0">
      <div>
        <h1 className="text-xl font-bold text-secondary-300 mb-8">
          صفحه ای که دنبالش بودید، پیدا نشد .
        </h1>
        <button onClick={moveBack} className="flex items-center gap-x">
          <HiArrowRight className="w-6 h-6 text-primary-900" />
          <span>برگشت</span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
