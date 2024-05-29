import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/main.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3000,
    },
  },
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
