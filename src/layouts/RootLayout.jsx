import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import RoughHeader from "../components/roughHeader";
// import RoughHeader from "../components/roughHeader";

const RootLayout = () => {
  return (
    <div>
      <Header></Header>
      {/* <RoughHeader></RoughHeader> */}
      <main className="overflow-x-clip">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
