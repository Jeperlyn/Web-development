import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Shoes from "./pages/Shoes";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Login from "./pages/login"; // Import the Login component
import "./style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shoes />} /> {/* Home Page */}
          <Route path="/add" element={<Add />} /> {/* Add Page */}
          <Route path="/update/:id" element={<Update />} /> {/* Update Page */}
          <Route path="/login" element={<Login />} /> {/* Login Page */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
