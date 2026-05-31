import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import TrumpPage from './pages/TrumpPage.jsx';
import AndreVenturaPage from './pages/AndreVenturaPage.jsx';
// import PutinPage from './pages/PutinPage.jsx';
// import MileiPage from './pages/MileiPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/donald-trump" element={<TrumpPage />} />
      <Route path="/andre-ventura" element={<AndreVenturaPage />} />

      {/* 之后增加页面就在这里加 */}
      {/* <Route path="/vladimir-putin" element={<PutinPage />} /> */}
      {/* <Route path="/javier-milei" element={<MileiPage />} /> */}

      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;