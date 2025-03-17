import router from "./router";
import { RouterProvider } from "react-router-dom";
import { FilesProvider } from "./context/filesContext";

function App() {
  return (
    <>
      <FilesProvider>
        <RouterProvider router={router} />
      </FilesProvider>
    </>
  );
}

export default App;
