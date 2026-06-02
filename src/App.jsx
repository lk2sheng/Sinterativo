import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import AndreVenturaPage from './pages/AndreVenturaPage.jsx';
import AntonioCostaPage from './pages/AntonioCostaPage.jsx';
import AntonioGuterresPage from './pages/AntonioGuterresPage.jsx';
import AntonioSeguroPage from './pages/AntonioSeguroPage.jsx';
import BenjaminNetanyahuPage from './pages/BenjaminNetanyahuPage.jsx';
import DonaldTrumpPage from './pages/DonaldTrumpPage.jsx';
import EmmanuelMacronPage from './pages/EmmanuelMacronPage.jsx';
import FriedrichMerzPage from './pages/FriedrichMerzPage.jsx';
import GiorgiaMeloniPage from './pages/GiorgiaMeloniPage.jsx';
import JavierMileiPage from './pages/JavierMileiPage.jsx';
import KimJongUnPage from './pages/KimJongUnPage.jsx';
import LuisMontenegroPage from './pages/LuisMontenegroPage.jsx';
import LuizLulaPage from './pages/LuizLulaPage.jsx';
import MarkCarneyPage from './pages/MarkCarneyPage.jsx';
import MarkRuttePage from './pages/MarkRuttePage.jsx';
import MojtabaKhameneiPage from './pages/MojtabaKhameneiPage.jsx';
import NatoPage from './pages/NatoPage.jsx';
import OnuPage from './pages/OnuPage.jsx';
import PassosCoelhoPage from './pages/PassosCoelhoPage.jsx';
import PedroSanchezPage from './pages/PedroSanchezPage.jsx';
import PeterMagyarPage from './pages/PeterMagyarPage.jsx';
import SanaeTakaichiPage from './pages/SanaeTakaichiPage.jsx';
import UnionEuropeiaPage from './pages/UnionEuropeiaPage.jsx';
import UrsulaVonDerLeyenPage from './pages/UrsulaVonDerLeyenPage.jsx';
import PutinPage from './pages/VladimirPutinPage.jsx';
import VolodymyrZelenskyPage from './pages/VolodymyrZelenskyPage.jsx';
import XiJinpingPage from './pages/XiJinpingPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/andre-ventura" element={<AndreVenturaPage />} />
      <Route path="/antonio-costa" element={<AntonioCostaPage />} />
      <Route path="/antonio-guterres" element={<AntonioGuterresPage />} />
      <Route path="/antonio-seguro" element={<AntonioSeguroPage />} />
      <Route path="/benjamin-netanyahu" element={<BenjaminNetanyahuPage />} />
      <Route path="/donald-trump" element={<DonaldTrumpPage />} />
      <Route path="/emmanuel-macron" element={<EmmanuelMacronPage />} />
      <Route path="/friedrich-merz" element={<FriedrichMerzPage />} />
      <Route path="/giorgia-meloni" element={<GiorgiaMeloniPage />} />
      <Route path="/javier-milei" element={<JavierMileiPage />} />
      <Route path="/kim-jong-un" element={<KimJongUnPage />} />
      <Route path="/luis-montenegro" element={<LuisMontenegroPage />} />
      <Route path="/luiz-lula" element={<LuizLulaPage />} />
      <Route path="/luiz-inacio-lula-da-silva" element={<LuizLulaPage />} />
      <Route path="/mark-carney" element={<MarkCarneyPage />} />
      <Route path="/mark-rutte" element={<MarkRuttePage />} />
      <Route path="/mojtaba-khamenei" element={<MojtabaKhameneiPage />} />
      <Route path="/nato" element={<NatoPage />} />
      <Route path="/nato-otan" element={<NatoPage />} />
      <Route path="/onu" element={<OnuPage />} />
      <Route path="/passos-coelho" element={<PassosCoelhoPage />} />
      <Route path="/pedro-passos-coelho" element={<PassosCoelhoPage />} />
      <Route path="/pedro-sanchez" element={<PedroSanchezPage />} />
      <Route path="/peter-magyar" element={<PeterMagyarPage />} />
      <Route path="/sanae-takaichi" element={<SanaeTakaichiPage />} />
      <Route path="/union-europeia" element={<UnionEuropeiaPage />} />
      <Route path="/uniao-europeia" element={<UnionEuropeiaPage />} />
      <Route path="/ursula-von-der-leyen" element={<UrsulaVonDerLeyenPage />} />
      <Route path="/putin" element={<PutinPage />} />
      <Route path="/vladimir-putin" element={<PutinPage />} />
      <Route path="/volodymyr-zelensky" element={<VolodymyrZelenskyPage />} />
      <Route path="/xi-jinping" element={<XiJinpingPage />} />


      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
