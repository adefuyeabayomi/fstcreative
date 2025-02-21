import React, { createContext, useState, useContext } from "react";

// Define the shape of your auth context
interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string, email: string,expiresAt: number, userID: string) => void;
  logout: () => void;
  user: string;
  email: string;
  token: string;
  expiresAt: string;
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
  user: "", // or you can use emptyUser if a user object is always required, import the user type.
  email: "",
  token: "",
  expiresAt: ''
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
  const [expiresAt, setExpiresAt] = useState<number>(new Date().getTime());
  const [token, setToken] = useState("");
  const [user,setUser] = useState("")
  //default auth state is not authenticated. then use effect checks if there is an accessToken
  
  const login = (accessToken: string, email: string,expiresAt: number,userID: string) => {
    setExpiresAt(expiresAt)
    setIsAuthenticated(true)
    setEmail(email)
    setToken(accessToken)
    setUser(userID)
    window.localStorage.setItem("access_token", accessToken);
    window.localStorage.setItem("user_email", email);
    window.localStorage.setItem("user_id", userID);
    window.localStorage.setItem("token_expires_at", String(expiresAt));
  };

  const logout = () => {
    setIsAuthenticated(false);
    window.localStorage.setItem("access_token", "");
    window.localStorage.setItem("token_expires_at", "");

  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, user, email, token,expiresAt: String(expiresAt) }}
    >
      {children}
    </AuthContext.Provider>
  );
};
