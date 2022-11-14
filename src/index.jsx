import React from "react";
import { createRoot } from "react-dom/client";
import { Utility } from "./component";
import "./index.css";

const app = <Utility />;
const here = document.querySelector("#here");

const root = createRoot(here);
root.render(app);
