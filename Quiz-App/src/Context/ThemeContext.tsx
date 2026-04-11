import { createContext, useContext, useState, type ReactNode } from "react";

interface ThemeContextInterface {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  toggleTheme: () => void;
}

interface ChildrenInterface {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextInterface | null>(null);

export const ThemeProvider = ({ children }: ChildrenInterface) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
};