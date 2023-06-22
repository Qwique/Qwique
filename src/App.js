
import Home from './pages/home.jsx';
import TermsCondition from './pages/termsAndCondition.js';
import PrivacyPolicy from './pages/privacyAndPolicy.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Home />}path='/'/>
      <Route element={<TermsCondition />}path='/terms-and-condition'/>
      <Route element={<PrivacyPolicy />}path='/privacy-policy'/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
