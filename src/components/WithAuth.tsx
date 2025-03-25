import { useAuth } from "react-oidc-context";
import { useContext, useEffect } from "react";
import { LoaderContext } from "../context/loaderContext";
import Loader from "./Loader";

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return function WithAuthComponent(props: P) {
    const { isLoading: isAuthLoading, isAuthenticated, signinRedirect } = useAuth();
    const { isLoading } = useContext(LoaderContext);

    useEffect(() => {
      const signin = async () => {
        if (!isAuthLoading && !isAuthenticated) {
          await signinRedirect();
        }
      };
      signin();
    }, [isAuthenticated, signinRedirect, isAuthLoading]);

    if (isAuthLoading || isLoading) {
      return <Loader />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
