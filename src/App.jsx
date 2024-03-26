import { Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { About } from "./About/About";
import { Pages } from "./pages/Pages";
import { Service } from "./services/Service";
import { Blog } from "./blog/Blog";
import { Contact } from "./contact/Contact";
import { Faq } from "./faq/Faq";
import { TermsCondition } from "./termsandcondition/TermsCondition";
import { PrivacyPolicy } from "./privacypolicy/PrivacyPolicy";


function App() {

  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pages" element={<Pages />} />
      <Route path="/service" element={<Service />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/terms&condition" element={<TermsCondition/>} />
      <Route path="/privacy&policy" element={<PrivacyPolicy/>} />
    </Routes>

  )
}

export default App
