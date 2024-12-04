import { StrictMode } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import CustomMuiColors from "./components/sharedMui/CustomMuiColors.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <CustomMuiColors>
          <App />
        </CustomMuiColors>
        <Toaster
          containerStyle={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: 2,
          }}
          reverseOrder={false}
          toastOptions={{
            duration: 5000,
            style: {
              minWidth: "290px",
              padding: "10px",
              border: "3px solid var(--second-text-color)",
              background: "black",
              color: "var(--second-text-color)",
              fontSize: "18px",
            },
          }}
        />
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </StrictMode>
);
