import React, { createContext, useState, useContext } from "react";

// Define the shape of your auth context
interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string, user: string) => void;
  logout: () => void;
  user: undefined;
  email: string;
  token: string;
}

// Dummy login function
const dummyLogin = (): void => {};

// Dummy logout function
const dummyLogout = (): void => {
  console.log("Logout function called");
};

// Default initializer for AuthContextType
const defaultAuthContext: AuthContextType = {
  isAuthenticated: false,
  login: dummyLogin,
  logout: dummyLogout,
  user: undefined, // or you can use emptyUser if a user object is always required import the user type.
  email: "",
  token: "",
};

// Create the context with initial values
const AuthContext = createContext<AuthContextType>(defaultAuthContext);

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// AuthProvider component to wrap your app and provide context
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  //default auth state is not authenticated. then use effect checks if there is an accessToken
  let userFromStore = window.localStorage.getItem("user");
  let userData;

  if (userFromStore) {
    userData = JSON.parse(userFromStore);
  }
  const [user, setUser] = useState(userData);

  const login = (accessToken: string, email: string) => {
    setIsAuthenticated(true);
    setEmail(email);
    setToken(accessToken);
    window.localStorage.setItem("access_token", accessToken);
  };

  const logout = () => {
    setIsAuthenticated(false);
    window.localStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, user, email, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};
