import { createSlice, nanoid } from "reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialSate: {
    searchTerm: "",
    cars: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    // action.payload === {name: 'ab, cost: 140}
    addCar(state, action) {
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      const upadted = state.cars.filter((car) => {
        return car.id !== action.payload;
      });
      state.cars = upadted;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
