import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import WithAuth from "../components/WithAuth";

function RootLayout() {
  return (
    <div className="wrapper">
      <SideBar />
      <Header />
      <div className="content-page">
        <Outlet />
      </div>
    </div>
  );
}

export default WithAuth(RootLayout);
