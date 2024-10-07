import Navigation from "./navigation";
import { store } from "./store";
import { Provider } from "react-redux";
import { AuthProvider } from "./contexts/AuthContext";
import { LoadingContextProvider } from "./contexts/LoadingContext";
import { NotificationTriggerProvider } from "./contexts/notificationTrigger";
import { SocketProvider } from "./contexts/SocketContext";

function App(): React.JSX.Element {
  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <SocketProvider>
            <LoadingContextProvider>
              <NotificationTriggerProvider>
                <Navigation />
              </NotificationTriggerProvider>
            </LoadingContextProvider>
          </SocketProvider>
        </AuthProvider>
        <div className="container-fluid no-space">
          <div className="row no-space align-items-center">
            <div className="no-space col"></div>
            <div className="no-space col"></div>
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
