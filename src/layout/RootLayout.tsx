import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "react-oidc-context";
import SideBar from "./SideBar";
import Header from "./Header";

function RootLayout() {
  const { isLoading, isAuthenticated, signinRedirect } = useAuth();

  useEffect(() => {
    const signin = async () => {
      if (!isLoading && !isAuthenticated) {
        await signinRedirect();
      }
    };
    signin();
  }, [isAuthenticated, signinRedirect, isLoading]);

  if (isLoading) {
    return (
      <div id="loading">
        <div id="loading-center"></div>
      </div>
    );
  }

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

export default RootLayout;
