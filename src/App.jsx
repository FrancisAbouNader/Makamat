import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import SubsidiariesPage from './pages/SubsidiariesPage';
import GBMSPage from './pages/GBMSPage';
import GBMSTeamMemberPage from './pages/GBMSTeamMemberPage';
import './App.css';
import DigilinkPage from "./pages/DigiLinkPage.jsx";
import ExpertsPage from "./pages/ExpertsPage.jsx";
import ExpertDetailPage from "./pages/ExpertDetailsPage.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";
import TermsConditionsPage from "./pages/TermsConditionsPage.jsx";
import CookiePolicyPage from "./pages/CookiePolicyPage.jsx";

function App() {
  return (
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetailPage />} />
          <Route path="/subsidiaries" element={<SubsidiariesPage />} />
          <Route path="/gbms" element={<GBMSPage />} />
          <Route path="/gbms/team/:id" element={<GBMSTeamMemberPage />} />
            <Route path="/digilink" element={<DigilinkPage />} />
            <Route path="/experts" element={<ExpertsPage />} />
            <Route path="/experts/:id" element={<ExpertDetailPage />} />
          <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-conditions" element={<TermsConditionsPage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        </Routes>
      </div>
  );
}

export default App;