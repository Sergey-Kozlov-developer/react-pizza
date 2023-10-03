import './scss/app.scss';
import Header from './components/Header.jsx';
import Categories from './components/Categories.jsx';
import Sort from './components/Sort.jsx';
import PizzaBlock from './components/PizzaBlock.jsx';
import { useEffect, useState } from 'react';

// function Pizza() {}
function App() {
  // useState для получения пицц с бэка
  const [items, setItems] = useState([]);

  // тут useEffect позволяет в запросе делать 1 запрос на бэк
  // т.е. он откладывает действие
  // useEffect выполняет код внутри себя один раз если вконце передать пустой массив []
  useEffect(() => {
    fetch('https://api.npoint.io/0682b44356ab955eecbc')
      .then((res) => res.json())
      .then((arr) => setItems(arr));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((element) => (
              <PizzaBlock key={element.id} {...element} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
