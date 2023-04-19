import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

function CarSearch() {
  const dispatch = useDispatch();

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  const searchTermm = useSelector((state) => {
    return state.cars.searchTermm;
  });

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search filed is-horizontal">
        <label label>search</label>
        <input
          className="input"
          value={searchTermm}
          onChange={handleSearchTermChange}
        ></input>
      </div>
    </div>
  );
}

export default CarSearch;
