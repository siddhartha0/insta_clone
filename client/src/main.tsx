import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Hack } from "./Hack.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Hack />
  </StrictMode>
);
