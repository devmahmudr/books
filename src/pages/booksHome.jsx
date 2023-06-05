import Header from "../components/Header/header";
import Main from "../containers/main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BooksSingle from "./booksSingle";

const BooksHome = () => {
  return (
    <div>
        <Header />
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path="/bookssingle/:id" element={BooksSingle} />
        </Routes>
    </div>
  );
};

export default BooksHome;
