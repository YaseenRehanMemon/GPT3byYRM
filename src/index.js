import React from "react";
import { Analytics } from '@vercel/analytics';
import ReactDOM from "react-dom/client"; // Note the change here
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // Change here
root.render(<App />); // And here
