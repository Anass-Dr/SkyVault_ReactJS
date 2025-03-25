import router from "./router";
import { RouterProvider } from "react-router-dom";
import { FilesProvider } from "./context/filesContext";
import { LoaderContextProvider } from "./context/loaderContext";

function App() {
  return (
    <>
      <FilesProvider>
        <LoaderContextProvider>
          <RouterProvider router={router} />
        </LoaderContextProvider>
      </FilesProvider>
    </>
  );
}

export default App;
