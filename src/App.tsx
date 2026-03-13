import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";
import { Navbar } from "./components/Navbar/Navbar";
import  Banner  from "./components/Banner/Banner";
import CoursesHeader from "./components/Courses/CoursesHeader";
import CoursesCards from "./components/Courses/CoursesCards";
import ProductsTitle     from "./components/Products/ProductsTitle";
import TwoStorys from "./components/Products/TwoStorys";
import ContactSection from "./components/Contact/ContactSection";
import { DotMedia } from "./components/DotMedia/DotMedia";
import  Footer  from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <CoursesHeader/>
      <CoursesCards/>
      <ProductsTitle/>
      <TwoStorys/>
      <ContactSection/>
      <DotMedia/>
      <Footer/>
    </div>
  );
}

export default App;
