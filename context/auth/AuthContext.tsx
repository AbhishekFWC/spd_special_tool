import React, {
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

interface AuthContextInterface {
  userLoggedIn: boolean;
  logout: () => void;
  checkLogin: () => void;
  user: object | null;
  setUser: React.Dispatch<SetStateAction<object>>;
}

export const AuthContext = createContext<AuthContextInterface | undefined>(
  undefined
);

interface Props {
  children: React.ReactNode;
}

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState({});

  const checkLogin = () => {};

  const logout = () => {};

  useEffect(() => {
    checkLogin();
  }, []);
  
  return (
    <AuthContext.Provider
      value={{ user, setUser, checkLogin, logout, userLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
