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
  // для выбора катеогрий
  const [categoryId, setCategoryId] = useState(0);
  // useState выбор сортировки
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  // https://api.npoint.io/0682b44356ab955eecbc?category=
  // тут useEffect позволяет в запросе делать 1 запрос на бэк
  // т.е. он откладывает действие
  // useEffect выполняет код внутри себя один раз если вконце передать пустой массив []
  useEffect(() => {
    setIsLoading(true);
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    fetch(
      `https://651ffc47906e276284c3d735.mockapi.io/pizza?${category}&sortBy=${sortBy}&order=${order}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories
            value={categoryId}
            onChangeCategory={(index) => setCategoryId(index)}
          />
          <Sort value={sortType} onChangeSort={(index) => setSortType(index)} />
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
