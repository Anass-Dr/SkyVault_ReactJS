import { useState, createContext } from "react";

type LoaderContextType = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

export const LoaderContext = createContext<LoaderContextType>({
  isLoading: false,
  setIsLoading: () => {},
});

export const LoaderContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};
