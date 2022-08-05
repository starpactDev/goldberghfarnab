import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import Footer from './Components/AllComponents/Footer';
import './Components/AllComponents/Navbar'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import HomePage from './Pages/HomePage';
import Navbar from './Components/AllComponents/Navbar'
import ContactUsPage from './Pages/ContactUsPage'
import ScrollToTop from './Components/AllComponents/ScrollToTop';
import AboutUsPage from './Pages/AboutUsPage';
import ParticleBackground from './Components/AllComponents/ParticleBackground';
import ApplyNowPage from './Pages/ApplyNowPage';
import BlogPage from './Pages/BlogPage';

import FAQPage from './Pages/FAQPage';
import FinancialServicesPage from './Pages/FinancialServicesPage';
import Error404Page from './Pages/Error404Page';



const theme = createTheme({
  palette: {
    primary: {
      main: "#1135d4"
    }
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "bold" },
          style: {
            fontWeight: "200",
            fontSize: "16px",
            color: "#181818",
            width: "200px",
            background: "rgb(247,208,1)",
            // backgroundImage: "linear-gradient(180deg, #f24406 80%, #a12e02 100%)",
            backgroundImage: "linear-gradient(45deg, rgba(247,208,1,1) 72%, rgba(237,249,113,1) 100%)",
            boxShadow: "0px 1px 2px #121212",
            transition: " all 0.6s ease-in-out",
            "&:hover": {
              transform: "scale(1.2)"
            }
          }
        }
      ]
    }
  }
});

function App() {
  return (

    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <ScrollToTop/>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/apply-now" element={<ApplyNowPage />} />
            <Route path="/financial-services" element={ <FinancialServicesPage/> } />
            <Route path="/FAQ" element={<FAQPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/*" element={<Error404Page />} />
          </Routes>
          <Footer />
        </Router>
        
      </div>
    </ThemeProvider>

  );
}

export default App;
