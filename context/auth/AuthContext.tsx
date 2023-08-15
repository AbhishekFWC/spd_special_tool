"use client";
import React, { SetStateAction, createContext, useEffect, useState } from "react";
import { checkLoginUser } from "../../actions/authActions";
import { useRouter } from "next/navigation";

interface AuthContextInterface {
  userLoggedIn: boolean;
  setUserLoggedIn : React.Dispatch<SetStateAction<boolean>>;
  logout: () => void;
  user: object | null;
}

const initialState: AuthContextInterface = {
  userLoggedIn: false,
  setUserLoggedIn : () => {},
  logout: () => {},
  user: {},
};
export const AuthContext = createContext<AuthContextInterface>(initialState);

interface Props {
  children: React.ReactNode;
}

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<object | null>({});

  const checkLogin = async () => {
    const res = await checkLoginUser();
    if (res.success) {
      setUser(res.data);
      setUserLoggedIn(true);
      router.push('/finder/investors')
      return;
    }
  };

  const logout = () => {
    setUserLoggedIn(false);
    setUser(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider value={{ user,setUserLoggedIn, logout, userLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
