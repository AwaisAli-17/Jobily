import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import axios from "axios";

const data = await axios.get("/api/v1/test");
console.log(data);
// fetch("/api/v1/test")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
