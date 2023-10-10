import './scss/app.scss';
import Header from './components/Header.jsx';
import { Home } from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart.jsx';
import { createContext, useState } from 'react';

// function Pizza() {}
export const SearchContext = createContext();
function App() {
  // прокидываем этот useState из App->Header->Search
  // связываем Search через Header для передачи в App
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
