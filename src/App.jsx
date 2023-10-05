import './scss/app.scss';
import Header from './components/Header.jsx';
import { Home } from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart.jsx';

// function Pizza() {}
function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
