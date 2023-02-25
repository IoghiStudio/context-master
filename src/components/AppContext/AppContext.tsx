import { useState, createContext } from 'react';

type AppContext = {
  todos: string[];
  setTodos: (name: string) => void;
}

export const AppContext = createContext<AppContext>({
  todos: [],
  setTodos: (name: string) => {},
});

type ProviderProps = {
  children: React.ReactNode;
}

export const AppProvider: React.FC<ProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const context = {
    todos,
    setTodos,
  }

  return (
    <AppContext.Provider value={context} >
      {children}
    </AppContext.Provider>
  )
}

