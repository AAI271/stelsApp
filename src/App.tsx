import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./i18n";
import MainPage from "./pages/main/mainPage.tsx";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import ServicePage from "./pages/service/ServicePage.tsx";
import DistributePage from "./pages/distribute/DistibutePage.tsx";
import UsagePage from "./pages/usage/UsagePage.tsx";
import AboutPage from "./pages/about/AboutPage.tsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/distribute" element={<DistributePage />} />
        <Route path="/usage" element={<UsagePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
  
export default App;
