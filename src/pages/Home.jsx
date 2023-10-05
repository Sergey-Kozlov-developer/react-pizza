import Categories from '../components/Categories.jsx';
import Sort from '../components/Sort.jsx';
import Skeleton from '../components/PizzaBlock/Skeleton.jsx';
import PizzaBlock from '../components/PizzaBlock/index.jsx';
import { useEffect, useState } from 'react';

export const Home = () => {
  // useState для получения пицц с бэка
  const [items, setItems] = useState([]);
  // useState для загрузки скелетона
  const [isLoading, setIsLoading] = useState(true);

  // тут useEffect позволяет в запросе делать 1 запрос на бэк
  // т.е. он откладывает действие
  // useEffect выполняет код внутри себя один раз если вконце передать пустой массив []
  useEffect(() => {
    fetch('https://api.npoint.io/0682b44356ab955eecbc')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {/*...new Array(6) превращаем в массив строк и возвращаем Skeleton*/}
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items.map((element) => (
                <PizzaBlock key={element.id} {...element} />
              ))}
        </div>
      </div>
    </>
  );
};
export default Home;
