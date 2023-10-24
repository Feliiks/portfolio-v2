import { BrowserRouter, Route, Routes } from "react-router-dom";

import { IoMdArrowDropupCircle } from "react-icons/io";

import Header from "./components/header";

import Home from "./components/home";
import About from "./components/about";
import Works from "./components/works";

import Footer from "./components/footer";

import Ps from "./components/works/detail/Ps";
import Stefanos from "./components/works/detail/Stefanos";
import Hts from "./components/works/detail/Hts";
import Cgc from "./components/works/detail/Cgc";
import Andrea from "./components/works/detail/Andrea";
import Ffcc from "./components/works/detail/Ffcc";
import Lsvibes from "./components/works/detail/Lsvibes";
import LavandesWeb from "./components/works/detail/LavandesWeb";
import LavandesMobile from "./components/works/detail/LavandesMobile";
import SouthLand from "./components/works/detail/Southland";

function App() {
  return (
    <BrowserRouter>
      <IoMdArrowDropupCircle
        size={25}
        className="l-btn"
        onClick={() => window.scrollTo(0, 0)}
      />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/travaux" element={<Works />} />

        <Route
          path="/works/detail/lavandes-mobilapp"
          element={<LavandesMobile />}
        />
        <Route path="/works/detail/lavandes-webapp" element={<LavandesWeb />} />
        <Route path="/works/detail/procedes-speciaux" element={<Ps />} />
        <Route path="/works/detail/stefanos" element={<Stefanos />} />
        <Route path="/works/detail/hts" element={<Hts />} />
        <Route path="/works/detail/cgc" element={<Cgc />} />
        <Route path="/works/detail/andrea-naturo" element={<Andrea />} />
        <Route path="/works/detail/ffcc" element={<Ffcc />} />
        <Route path="/works/detail/lsvibes" element={<Lsvibes />} />
        <Route
          path="/works/detail/southland-launcher"
          element={<SouthLand />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
