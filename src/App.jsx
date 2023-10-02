import './scss/app.scss';
import Header from './components/Header.jsx';
import Categories from './components/Categories.jsx';
import Sort from './components/Sort.jsx';
import PizzaBlock from './components/PizzaBlock.jsx';
import pizzas from './assets/pizza.json';

// function Pizza() {}
function App() {
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
            {pizzas.map((element) => (
              <PizzaBlock
                {...element} // делает то что описано внизу
                // title={element.title}
                // price={element.price}
                // imageUrl={element.imageUrl}
                // sizes={element.sizes}
                // types={element.types}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
