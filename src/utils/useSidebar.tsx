import React, { PropsWithChildren, createContext, useContext, useReducer } from 'react';

interface SidebarStateContextType {
  state: boolean;
  toggleState: () => void;

  isDark: boolean;
  toggleIsDark: () => void;
}

const SidebarContext = createContext<SidebarStateContextType | undefined>(undefined);

export const SidebarProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, toggleState] = useReducer((prev) => !prev, false);
  const [isDarkMode, toggleDarkMode] = useReducer((prev) => !prev, false);


  return (
    <SidebarContext.Provider value={{state, toggleState, isDark:isDarkMode, toggleIsDark:toggleDarkMode}}>
      {children}
    </SidebarContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};