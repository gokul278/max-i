import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { AboutUs } from "./Components/AboutUs/AboutUs";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Services } from "./Components/Services/Services";
import { Contactus } from "./Components/ContactUs/Contactus";
import { Works } from "./Components/Works/Works";
import ScrollToTop from "./Pages/ScrollToTop/ScrollToTop";
import { Blogs } from "./Components/Blogs/Blogs";
import { WebDesigns } from "./Components/WebDesigns/WebDesigns";
import { LogoDesigns } from "./Components/LogoDesigns/LogoDesigns";
import { PrintPosters } from "./Components/PrintPosters/PrintPosters";
import { SocialMediaPosters } from "./Components/SocialMediaPosters/SocialMediaPosters";
import { Videos } from "./Components/Videos/Videos";

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
        <Route path="/works/webdesigns" element={<WebDesigns />} />
        <Route path="/works/logodesigns" element={<LogoDesigns />} />
        <Route path="/works/logodesigns" element={<LogoDesigns />} />
        <Route path="/works/logodesigns" element={<LogoDesigns />} />
        <Route path="/works/printposters" element={<PrintPosters />} />
        <Route path="/works/socialmediaposters" element={<SocialMediaPosters />} />
        <Route path="/works/videos" element={<Videos />} />
        <Route path="*" element={<Navigate to="/" />} />
        {/* <Route path="/blogs" element={<Blogs />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
