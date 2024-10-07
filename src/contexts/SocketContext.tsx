import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { io, Socket } from "socket.io-client";
let backendUrl = "http://localhost:8080";

// Define the shape of the context value
interface SocketContextType {
  socket: Socket | null;
}

// Create a context with an initial value of null
const SocketContext = createContext<SocketContextType | undefined>(undefined);

// Custom hook to use the SocketContext
export const useSocket = (): SocketContextType => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return context;
};

// Define the Props type for the provider
interface SocketProviderProps {
  children: ReactNode;
}

// Socket Provider component that wraps your app
export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    // Initialize the socket connection
    const socketInstance: Socket = io(backendUrl); // Update with your server URL

    setSocket(socketInstance);

    // Clean up the connection when the component unmounts
    return () => {
      socketInstance.disconnect();
    };
  }, []);

  const contextValue = useMemo(() => ({ socket }), [socket]);

  return (
    <SocketContext.Provider value={contextValue}>
      {children}
    </SocketContext.Provider>
  );
};
