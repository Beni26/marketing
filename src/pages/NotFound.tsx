import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";
import NotFoundImage from "../assets/images/page-not-found.jpg";

const NotFound = () => {
  const moveBack = useMoveBack();
  return (
    <div className="container xl:max-w-screen-xl mb-20 pl-4 pr-4 md:pl-0 md:pr-0">
      <div className="text-center ">
        <img className="mx-auto max-h-[400px] mb-5" src={NotFoundImage}  />
        <h1 className="text-xl font-bold text-secondary-300 mb-8">
          صفحه ای که دنبالش بودید، پیدا نشد .
        </h1>
        <button
          onClick={moveBack}
          className="flex items-center gap-x bg-primary rounded-lg p-3 text-white mx-auto gap-1"
        >
          <HiArrowRight className="w-5 h-4" />
          <span>برگشت</span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
