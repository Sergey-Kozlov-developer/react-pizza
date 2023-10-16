import { createSlice } from "@reduxjs/toolkit";

// инициализация, как в useState(0) то, что в скобках
// другими словами начальное состояние
const initialState = {
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: "популярности",
    sortProperty: "rating",
  },
};

// создание самого слайса
const filterSlice = createSlice({
  name: "filters", // название слайса
  initialState,
  // создаем action, отвечающий за действия. сохранение категорий и сортировку
  // функции как в [categoryId, setCategoryId] = useState(0)
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    // pagination
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

// вытаскиваем методы из filterSlice и экспортируем
export const { setCategoryId, setSort, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
