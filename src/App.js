import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RoutesPage from "./pages/RoutesPage/RoutesPage";
import TerminalPage from "./pages/TerminalPage/TerminalPage";
import './index.css'
import BookingPage from "./pages/BookingPage/BookingPage";
import ConfirmationPage from "./pages/ConfirmationPage/ConfirmationPage";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/terminal" element={<TerminalPage/>} />
          <Route path="/route" element={<RoutesPage/>} />
          <Route path="/booking" element={<BookingPage/>} />
          <Route path="/confirm" element={<ConfirmationPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
