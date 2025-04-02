import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromChildren,
} from "react-router";
import About from "./components/page/About.jsx";
import Service from "./components/page/Service.jsx";
import Contact from "./components/page/Contact.jsx";
import Home from "./components/page/Home.jsx";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Contact" element={<Contact />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
