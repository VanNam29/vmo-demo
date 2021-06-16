/* eslint-disable arrow-parens */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useFirestoreConnect } from "react-redux-firebase";
import { searchProduct } from "../../services/product.services";
import { Product } from "../product/product";
import { changeFilter } from "./redux-filter/filter.actions";
import { useCustomProduct } from "../customGetAll/customGetAll";

export function FilterProducts(props) {
  const { propsFilter } = props;
  const [inputFilter, setInputFilter] = useState(propsFilter || "Tất cả");
  const [inputSearch, setInputSearch] = useState("");
  const filters = useSelector((state) => state.filters);
  const productList = useCustomProduct();
  const dispatch = useDispatch();

  useEffect(() => {
    if (inputFilter !== "Tất cả") {
      const action = changeFilter(inputFilter);
      dispatch(action);
    }
  }, []);

  const handleChange = (event) => {
    setInputFilter(event.target.value);
    const action = changeFilter(event.target.value);
    dispatch(action);
  };

  const handleSearchChange = (event) => {
    setInputSearch(event.target.value);
  };

  const handleSubmit = () => {
    console.log("submit", inputSearch);
    setInputSearch("");
    const action = searchProduct(inputSearch);
    dispatch(action);
  };

  const filterProducts = (products, filters) => {
    switch (filters) {
      case "Bánh truyền thống": {
        return products.filter((product) => product.nameCategory === "Bánh truyền thống");
      }
      case "Chè": {
        return products.filter((product) => product.nameCategory === "Chè");
      }
      case "Đồ ăn": {
        return products.filter((product) => product.nameCategory === "Đồ ăn");
      }
      case "Đồ uống": {
        return products.filter((product) => product.nameCategory === "Đồ uống");
      }
      case "Món ăn dân tộc": {
        return products.filter((product) => product.nameCategory === "Món ăn dân tộc");
      }
      default: {
        return products;
      }
    }
  };

  let visibleProduct = null;

  if (productList) {
    visibleProduct = filterProducts(productList, filters.filter);
  }

  return (
    <section className="mt-8 font-sans">
      <div className="w-full relative">
        <form className="w-full h-8" onSubmit={handleSubmit}>
          <select
            value={inputFilter}
            onChange={handleChange}
            className="h-8 w-48 bg-white border-solid border-2 border-light-gray-500 absolute"
          >
            <option value="Tất cả">-Tất cả-</option>
            <option value="Bánh truyền thống">Bánh truyền thống</option>
            <option value="Chè">Chè</option>
            <option value="Đồ ăn">Đồ ăn</option>
            <option value="Đồ uống">Đồ uống</option>
            <option value="Món ăn dân tộc">Món ăn dân tộc</option>
          </select>
          <div className="absolute right-2 border-solid border-2 border-light-gray-500 h-8">
            <input
              onChange={handleSearchChange}
              type="text"
              className="w-full h-full top-0"
              placeholder="Tìm kiếm..."
              value={inputSearch}
            ></input>
            <div className="h-7 w-8 bg-black absolute top-0 right-0" role="button">
              <button type="submit" className="h-full w-full">
                <i className="fas fa-search text-white mt-1.5"></i>
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="w-full m-auto pt-16 grid grid-cols-4">
        {visibleProduct &&
          visibleProduct.map((product) => <Product key={product.id} product={product} />)}
      </div>
    </section>
  );
}
