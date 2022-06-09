import "./App.css";
import Mainpage from "./Components/Mainpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
