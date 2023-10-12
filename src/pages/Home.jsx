import Categories from "../components/Categories.jsx";
import Sort from "../components/Sort.jsx";
import Skeleton from "../components/PizzaBlock/Skeleton.jsx";
import PizzaBlock from "../components/PizzaBlock/index.jsx";
import { useContext, useEffect, useState } from "react";
import Pagination from "../components/Pagination/index.jsx";
import { SearchContext } from "../App.jsx";

import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice.js";

export const Home = () => {
  // hook redux вытаскиваем определенное из state фильтра
  const { categoryId, sort } = useSelector((state) => state.filter);
  // dispatch(redux) передает действие(например передает id выбора категории)
  const dispatch = useDispatch();

  const { searchValue } = useContext(SearchContext);
  // useState для получения пицц с бэка
  const [items, setItems] = useState([]);
  // useState для загрузки скелетона
  const [isLoading, setIsLoading] = useState(true);
  // для выбора катеогрий
  // const [categoryId, setCategoryId] = useState(0);
  // для пагинации
  const [currentPage, , setCurrentPage] = useState(1);

  // функция выбора категории redux
  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  // https://api.npoint.io/0682b44356ab955eecbc?category=
  // тут useEffect позволяет в запросе делать 1 запрос на бэк
  // т.е. он откладывает действие
  // useEffect выполняет код внутри себя один раз если вконце передать пустой массив []
  useEffect(() => {
    setIsLoading(true);
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sort.sortProperty.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue > 0 ? `&search=${searchValue}` : "";
    fetch(
      `https://651ffc47906e276284c3d735.mockapi.io/pizza?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, searchValue, currentPage, sort.sortProperty]);

  const pizzas = items.map((element) => (
    <PizzaBlock key={element.id} {...element} />
  ));
  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {/*...new Array(6) превращаем в массив строк и возвращаем Skeleton*/}
          {isLoading ? skeletons : pizzas}
        </div>
        <Pagination onChangePage={(number) => setCurrentPage(number)} />
      </div>
    </>
  );
};
export default Home;
