import { Routes, Route } from 'react-router-dom';
import App from './App';
import Disclaimer from './pages/Disclaimer';
import AboutUs from './pages/AboutUs';
import PrayerTimes from './pages/PrayerTimes';
import Duas from './pages/Duas';
import ContactUs from './pages/ContactUs';
import JoinAsProvider from './pages/JoinAsProvider';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/prayer-times" element={<PrayerTimes />} />
      <Route path="/duas" element={<Duas />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/join-provider" element={<JoinAsProvider />} />
    </Routes>
  );
}

export default Router;
