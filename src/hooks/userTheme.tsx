import React, { createContext, ReactNode, useContext, useState } from "react";

type ThemeUserProps = {
  children: ReactNode;
};

export interface UserThemeProps {
  type: "dark" | "light";
}

interface IUserThemeProps {
  userTheme: UserThemeProps;
  handleDefineTheme(type: UserThemeProps): void;
}

const ThemeContext = createContext({} as IUserThemeProps);

function UserThemeProvider({ children }: ThemeUserProps) {
  const [userTheme, setUserTheme] = useState<UserThemeProps>(
    {} as UserThemeProps
  );

  function handleDefineTheme(type: string) {
    setUserTheme({ type } as UserThemeProps);
  }

  return (
    <ThemeContext.Provider value={{ userTheme, handleDefineTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);

  return context;
}

export { UserThemeProvider, useTheme };
