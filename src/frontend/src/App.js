import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Books from "./components/Books";
import Login from "./components/Login";
import RegisterBook from "./components/RegisterBook";

function App() {
  return (
    <Router>
      <div className="header">
        <img src="book-book.png" />
      </div>

      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/register-book" element={<RegisterBook />} />
        <Route path="/register-book" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
