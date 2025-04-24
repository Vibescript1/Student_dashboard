import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "../routes/router";
import { NotificationProvider } from "./contexts/NotificationContext";
import App from "./App";
import { UserJobProvider } from "./contexts/UserJobContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NotificationProvider>
      <UserJobProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </UserJobProvider>
    </NotificationProvider>
  </StrictMode>
);
