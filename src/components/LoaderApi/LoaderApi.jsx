import { Hourglass } from "react-loader-spinner";
import s from "./LoaderApi.module.css";
const LoaderApi = () => {
  return (
    <div className={s.wrap}>
      <Hourglass
        margin="0 auto"
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass={s.loader}
        colors={["#306cce", "#72a1ed"]}
      />
    </div>
  );
};

export default LoaderApi;
