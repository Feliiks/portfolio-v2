import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { IoMdArrowDropupCircle } from "react-icons/io"

import Header from "./components/header"

import Home from "./components/home"

import Footer from "./components/footer"

function App() {
  return (
    <BrowserRouter>
      <IoMdArrowDropupCircle size={25} className="l-btn" onClick={() => window.scrollTo(0, 0)} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
