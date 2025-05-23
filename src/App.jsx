import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Router basename={import.meta.env.VITE_BASE_PATH}>
      <AppRoutes />
    </Router>
  );
}

export default App;
