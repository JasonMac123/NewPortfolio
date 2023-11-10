import { type } from "os";
import { createContext, useContext, useState } from "react";

interface ActiveSectionContextProviderProps {
  children: React.ReactNode;
}

type ActiveSectionContextType = {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProviderProps) => {
  const [activeSection, setActiveSection] = useState("Home");

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;

export const UseActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error("Context provider must be wrapped");
  }

  return context;
};
