import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Dashboard from "../pages/Dashboard";
import FilesPage from "../pages/FilesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/files",
        element: <FilesPage />,
      },
    ],
  },
]);
export default router;
