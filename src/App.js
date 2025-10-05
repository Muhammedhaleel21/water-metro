import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RoutesPage from "./pages/RoutesPage/RoutesPage";
import TerminalPage from "./pages/TerminalPage/TerminalPage";
import './index.css'



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/route" element={<RoutesPage/>} />
          <Route  path="/terminal" element={<TerminalPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
