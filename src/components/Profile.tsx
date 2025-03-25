import { useAuth } from "react-oidc-context";

const Profile = () => {
  const { user, removeUser } = useAuth();

  const signOutRedirect = async () => {
    try {
      await removeUser();
      const clientId = import.meta.env.VITE_COGNITO_CLIENT_ID;
      const logoutUri = import.meta.env.VITE_COGNITO_LOGOUT_URI;
      const cognitoDomain = import.meta.env.VITE_COGNITO_DOMAIN;

      if (!clientId || !logoutUri || !cognitoDomain) {
        console.error("Missing environment variables:", {
          clientId,
          logoutUri,
          cognitoDomain,
        });
        return;
      }

      const logoutUrl = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
        logoutUri
      )}`;
      console.log("Redirecting to:", logoutUrl);
      window.location.href = logoutUrl;
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  return (
    <div
      className="iq-sub-dropdown dropdown-menu"
      aria-labelledby="dropdownMenuButton03"
    >
      <div className="card mb-0">
        <div className="card-header d-flex justify-content-between align-items-center mb-0">
          <div className="header-title">
            <h4 className="card-title mb-0">Profile</h4>
          </div>
          <div className="close-data text-right badge badge-primary cursor-pointer">
            <i className="ri-close-fill"></i>
          </div>
        </div>
        <div className="card-body">
          <div className="profile-header">
            <div className="cover-container text-center">
              <div className="rounded-circle profile-icon bg-primary mx-auto d-block">
                P<a href="#"> </a>
              </div>
              <div className="profile-detail mt-3">
                <h5>
                  <span>{user?.profile["cognito:username"] as string}</span>
                </h5>
                <p>{user?.profile.email}</p>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => signOutRedirect()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
