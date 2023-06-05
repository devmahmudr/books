import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthHome, BooksHome, Signup, Signin } from "./pages/pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BooksHome />} />
        <Route path="/authhome" element={<AuthHome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
