import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../services/product.services";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router";

const initialInput = {
  nameProduct: "",
  imageProduct: "",
  priceProduct: null,
  quantityProduct: null,
  nameCategory: "",
  description: "",
};

export function ProductAdd() {
  const [invalid, setInvalid] = useState(true);
  const [inputs, setInputs] = useState(initialInput);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (
      !inputs.nameProduct ||
      !inputs.imageProduct ||
      !inputs.priceProduct ||
      !inputs.nameCategory ||
      !inputs.quantityProduct ||
      !inputs.description
    ) {
      setInvalid(false);
    }
    else {
      setInvalid(true);
      const newProduct = {
        id: uuidv4(),
        name: inputs.nameProduct,
        image: inputs.imageProduct,
        price: inputs.priceProduct,
        quantity: inputs.quantityProduct,
        nameCategory: inputs.nameCategory,
        description: inputs.description,
      };
      const action = addProduct(newProduct);
      dispatch(action);
      history.push("/admin");
    }
  };

  return (
    <div className="w-full">
      <form className="bg-white w-2/3 p-4 m-auto text-center" onSubmit={handleSubmit}>
        <p className="text-xl">Add Product</p>
        <p className={`${invalid ? "hidden" : " text-xs text-red-400"}`}>Field is not null</p>
        <div className="p-3">
          <input
            type="text"
            placeholder="name Product"
            name="nameProduct"
            value={inputs.nameProduct}
            onChange={handleInputChange}
            className="w-full h-8 border-solid border-2 border-gray-400"
          ></input>
        </div>
        <div className="p-3">
          <input
            type="text"
            placeholder="image Product"
            name="imageProduct"
            value={inputs.imageProduct}
            onChange={handleInputChange}
            className="w-full h-8 border-solid border-2 border-gray-400"
          ></input>
        </div>
        <div className="p-3">
          <input
            type="text"
            placeholder="price Product"
            name="priceProduct"
            value={inputs.priceProduct}
            onChange={handleInputChange}
            className="w-full h-8 border-solid border-2 border-gray-400"
          ></input>
        </div>
        <div className="p-3">
          <input
            type="text"
            placeholder="quantity Product"
            name="quantityProduct"
            value={inputs.quantityProduct}
            onChange={handleInputChange}
            className="w-full h-8 border-solid border-2 border-gray-400"
          ></input>
        </div>
        <div className="p-3">
          <input
            type="text"
            placeholder="name Category"
            name="nameCategory"
            value={inputs.nameCategory}
            onChange={handleInputChange}
            className="w-full h-8 border-solid border-2 border-gray-400"
          ></input>
        </div>
        <div className="p-3">
          <input
            type="text"
            placeholder="description"
            name="description"
            value={inputs.description}
            onChange={handleInputChange}
            className="w-full h-8 border-solid border-2 border-gray-400"
          ></input>
        </div>
        <div>
          <button type="submit" className="w-28 h-10 bg-blue-400 ">
            <span className="text-white">Add Product</span>
          </button>
        </div>
      </form>
    </div>
  );
}
