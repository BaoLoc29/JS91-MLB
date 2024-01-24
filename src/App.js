import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import QuanAo from './pages/QuanAo';
import Non from './pages/Non';
import GiayDep from './pages/GiayDep';
import TuiVi from './pages/TuiVi';
import PhuKien from './pages/PhuKien';
import Sales from './pages/Sales';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/quan-ao" element={<QuanAo />} />
        <Route path="/non" element={<Non />} />
        <Route path='/giay-dep' element={<GiayDep />} />
        <Route path='/tui-vi' element={<TuiVi />} />
        <Route path='/phu-kien' element={<PhuKien />} />
        <Route path='/sales' element={<Sales />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
