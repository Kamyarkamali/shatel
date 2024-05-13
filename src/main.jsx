import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// layou components-wrrap in all programmer
import Layout from "./components/layout/Layouts/Layout.jsx";

import ContextProvider from "./context/ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <Layout>
        <App />
      </Layout>
    </ContextProvider>
  </React.StrictMode>
);
