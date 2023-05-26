import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import { AuthHome, BooksHome } from "./pages/pages";

function App() {
  return (
    <Router>
      <Header />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<BooksHome />} />
          <Route path="/authhome" element={<AuthHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
