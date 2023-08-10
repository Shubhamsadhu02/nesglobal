import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './Styles/global.css'
import './Styles/Blog.scss'
import './Styles/CarbonCalculator.scss'
import './Styles/Faq.scss'
import './Styles/Responsive.css'

import Home from './Pages/Home';

import NesDigitalPlatform from './Pages/Product/NesDigitalPlatform';
import Visibility from './Pages/Product/Visibility';
import Customs from './Pages/Product/Customs';
import AirFreight from "./Pages/Product/AirFreight";
import OceanFreight from "./Pages/Product/OceanFreight";
import ProjectAirAndOceanCharters from "./Pages/Product/ProjectAirAndOceanCharters";
import TradeFinance from "./Pages/Product/TradeFinance";
import TradeAdvisory from "./Pages/Product/TradeAdvisory";
import Dutydrawbacks from "./Pages/Product/Dutydrawbacks";
import ProductClassification from "./Pages/Product/ProductClassification";
import CargoInsurance from "./Pages/Product/CargoInsurance";

import AboutUs from "./Pages/Company/AboutUs";
import Leadership from "./Pages/Company/Leadership";
import Engineering from "./Pages/Company/Engineering";
import ContactUs from "./Pages/Company/ContactUs";
import Vulnerability from "./Pages/Company/Vulnerability";

import Terms from "./Pages/TermsAndCondition/Terms";
import OceanTnC from "./Pages/TermsAndCondition/OceanTnC";
import AirTnC from "./Pages/TermsAndCondition/AirTnC";
import CustomsTnc from "./Pages/TermsAndCondition/CustomsTnc";
import VisibilityTnc from "./Pages/TermsAndCondition/VisibilityTnc";
import Privacy from "./Pages/TermsAndCondition/Privacy";

import Blog from "./Pages/Resources/Blog";
import BlogDetail from "./Pages/Resources/BlogDetail";
import Faq from "./Pages/Resources/Faq";
import Glossary from "./Pages/Resources/Glossary";

import Index from "./Pages/Company/CarbonCalculator/index";
import ScrollToTop from "./Partials/ScrollToTop";
import Login from "./Partials/Login";
import Signin from "./Partials/Signin";
import Errorpagenotfound from "./Partials/Errorpagenotfound";
import PaymentTnc from "./Pages/TermsAndCondition/PaymentTnc";
import Refund from "./Pages/Resources/Refund";
import Contactus2 from "./Pages/Company/Contactus2";
import CertificatePartner from "./Pages/Company/CertificatePartner";


function App() {
  return (
    
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        
        <Route path="/product/nes-platform" element={<NesDigitalPlatform/>}/>
        <Route path="/product/visibility" element={<Visibility/>}/>
        <Route path="/product/customs" element={<Customs/>}/>
        <Route path="/product/air-freight" element={<AirFreight/>}/>
        <Route path="/product/ocean-freight" element={<OceanFreight />}/>
        <Route path="/product/trade-finance" element={<TradeFinance/>}/>
        <Route path="/product/trade-advisory" element={<TradeAdvisory/>}/>
        <Route path="/product/duty-drawbacks" element={<Dutydrawbacks/>}/>
        <Route path="/product/product-classification" element={<ProductClassification/>}/>
        <Route path="/product/cargo-insurance" element={<CargoInsurance/>}/>
        <Route path="/product/air-charters" element={<ProjectAirAndOceanCharters/>}/>

        <Route path="/company/about-us" element={<AboutUs/>}/>
        <Route path="/company/leadership" element={<Leadership/>}/>
        <Route path="/company/engineering" element={<Engineering/>}/>
        <Route path="/company/contact-us" element={<Contactus2/>}/>    
        <Route path="/company/contact-us2" element={<ContactUs/>}/>
        <Route path="/certified-partner" element={<CertificatePartner/>}/>
        <Route path="/vulnerability" element={<Vulnerability/>}/>

        <Route path="/terms" element={<Terms/>}/>
        <Route path="/ocean-tnc" element={<OceanTnC/>}/>
        <Route path="/air-tnc" element={<AirTnC/>}/>
        <Route path="/customs-tnc" element={<CustomsTnc/>}/>
        <Route path="/visibility-tnc" element={<VisibilityTnc/>}/>
        <Route path="/payment-tnc" element={<PaymentTnc/>}/>
        <Route path="/privacy" element={<Privacy/>}/>

        <Route path="/resources/blog" element={<Blog/>} />
        <Route path="/resources/blogdetail" element={<BlogDetail/>} />
        <Route path="/resources/faq" element={<Faq/>} />
        <Route path="/resources/glossary" element={<Glossary/>} />
        <Route path="/resources/refund-policy" element={<Refund/>} />

        <Route path="/company/carboncalculator" element={<Index/>}/>

        <Route path="/login" element={<Login/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/404-error" element={<Errorpagenotfound/>}/>
        
      </Routes>
    </Router>
    
  );
}

export default App;
