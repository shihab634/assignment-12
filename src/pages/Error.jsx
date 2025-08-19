import { Link, useRouteError } from "react-router";
import Header from "../components/Header";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <Header></Header>
      <div className="flex  min-h-screen gap-3 bg-red-100 items-center justify-center">
        <p className="text-red-700 text-5xl text-center">Error</p>
        {/* <Link className="btn btn-outline bg-red-500 text-2xl" to={'/'}>Home</Link> */}
      </div>
    </div>
  );
};

export default Error;
