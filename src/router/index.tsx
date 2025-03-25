import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Dashboard from "../pages/Dashboard";
import FilesPage from "../pages/FilesPage";
import File from "../pages/File";
import SharedLink from "../pages/SharedLink";
import SharedFile from "../pages/SharedFile";
import NotFound from "../pages/NotFound";

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
  {
    path: "/file/:fileKey",
    element: <File />,
  },
  {
    path: "/share/:token",
    element: <SharedLink />,
  },
  {
    path: "/file/d/:fileKey",
    element: <SharedFile />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
