import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import "./styles/main.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    </Provider>
    
  </React.StrictMode>
);
