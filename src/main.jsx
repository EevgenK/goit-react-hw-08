import { StrictMode } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        // Define default options
        className: "",
        duration: 4000,
        style: {
          background: "grey",
          color: "#fff",
          border: "3px solid red",
        },

        // Default options for specific types
        error: {
          theme: {
            primary: "red",
            secondary: "black",
          },
        },
        success: {
          border: "3px solid green",
        },
      }}
    />
  </BrowserRouter>
  // </StrictMode>
);
