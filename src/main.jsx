import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import CreateTrip from "./create-trip";
import App from "./App";
import Header from "./components/custom/Header";
import { GoogleOAuthProvider } from "@react-oauth/google";


console.log('Google OAuth Client ID:', import.meta.env.VITE_GOOGLE_AUTH_API_KEY);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "create-trip",
    element:<CreateTrip/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_API_KEY}>
    <Header/>
    <RouterProvider router={router} />
    </GoogleOAuthProvider>  
  </React.StrictMode>
);
