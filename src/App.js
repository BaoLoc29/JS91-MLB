import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import QuanAo from './pages/QuanAo';
import Non from './pages/Non';
import GiayDep from './pages/GiayDep';
import TuiVi from './pages/TuiVi';
import Sales from './pages/Sales';
import Footer from './components/Footer';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import TuiDeoCheo from './pages/TuiDeoCheo';
import TuiXach from './pages/TuiXach';
import TuiBaoTu from './pages/TuiBaoTu';
import Balo from './pages/Balo';
import Quan from './pages/Quan';
import Ao from './pages/Ao';
import DanhChoNu from './pages/DanhChoNu';
import GiaySneakers from './pages/GiaySneakers';
import GiaySandals from './pages/GiaySandals';
import AoThun from './pages/AoThun';
import AoSoMi from './pages/AoSoMi';
import AoKhoac from './pages/AoKhoac';
import AoPolo from './pages/AoPolo';
import AoSatNach from './pages/AoSatNach';
import QuanJogger from './pages/QuanJogger';
import QuanShort from './pages/QuanShort';
import Cart from './pages/Cart';
import Search from './pages/Search';
import AoNu from './pages/AoNu';
import QuanNu from './pages/QuanNu';
import ChanVay from './pages/ChanVay';
import ProductDetail from './components/ProductDetail';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <div className="App">
      <Header onSearch={handleSearch} searchTerm={searchTerm}/>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path='/product/:id' element={<ProductDetail/>} />
        <Route path="/quan-ao" element={<QuanAo />} />
        <Route path="/ao" element={<Ao />} />
        <Route path="/ao-thun" element={<AoThun />} />
        <Route path="/ao-somi" element={<AoSoMi />} />
        <Route path="/ao-khoac" element={<AoKhoac />} />
        <Route path="/ao-polo" element={<AoPolo />} />
        <Route path="/ao-sat-nach" element={<AoSatNach />} />

        <Route path="/quan" element={<Quan />} />
        <Route path="/quan-jogger" element={<QuanJogger />} />
        <Route path="/quan-short" element={<QuanShort />} />

        <Route path="/danh-cho-nu" element={<DanhChoNu />} />
        <Route path="/ao-nu" element={<AoNu />} />
        <Route path="/quan-nu" element={<QuanNu />} />
        <Route path="/chan-vay" element={<ChanVay />} />

        <Route path='/non' element={<Non />} />

        <Route path='/giay-dep' element={<GiayDep />} />
        <Route path="/giay-sneakers" element={<GiaySneakers />} />
        <Route path="/giay-sandals" element={<GiaySandals />} />

        <Route path='/tui-vi' element={<TuiVi />} />
        <Route path='/tui-deo-cheo' element={<TuiDeoCheo />} />
        <Route path='/tui-xach' element={<TuiXach />} />
        <Route path='/tui-bao-tu' element={<TuiBaoTu />} />
        <Route path='/balo' element={<Balo />} />

        <Route path='/sales' element={<Sales />} />

        <Route path='/account/login' element={<LoginForm />} />
        <Route path='/account/register' element={<RegisterForm />} />

        <Route path='/cart' element={<Cart />} />
        <Route path='/search' element={<Search searchTerm={searchTerm} onSearch={handleSearch}/>} />


        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
