import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Sidebarr from "./components/Sidebarr";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebarr />
      </div>
    </Router>
  );
}

export default App;
