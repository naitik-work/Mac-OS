import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import WindowContextProvider from "./context/WindowContext.jsx";
createRoot(document.getElementById("root")).render(
  <WindowContextProvider>
    <App />
  </WindowContextProvider>,
);
