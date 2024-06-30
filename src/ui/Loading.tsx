import { ThreeDots } from "react-loader-spinner";

type LoadingProps = {
  width?: string;
  height?: string;
};
const Loading: React.FC<LoadingProps> = ({ width = "30", height = "20" }) => {
  return (
    <div>
      <ThreeDots
        visible={true}
        height={height}
        width={width}
        color="#FFF"
        radius={9}
        ariaLabel="three-dots-loading"
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
        }}
        wrapperClass=""
      />
    </div>
  );
};
export default Loading;
