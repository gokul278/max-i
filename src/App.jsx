import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { AboutUs } from "./Components/AboutUs/AboutUs";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Services } from "./Components/Services/Services";
import { Contactus } from "./Components/ContactUs/Contactus";
import { Works } from "./Components/Works/Works";
import ScrollToTop from "./Pages/ScrollToTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/works" element={<Works />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
