import { useState } from "react";
import { useDispatch } from "react-redux";
import { useDialog } from "react-st-modal";
import { addProduct } from "../../../services/product.services";

const initialInput = {
  nameProduct: "",
  imageProduct: "",
  priceProduct: null,
  nameCategory: "",
  description: "",
};

export function CustomDialogContent(props) {
  const [invalid, setInvalid] = useState(true);
  const [inputs, setInputs] = useState(initialInput);
  console.log("product", props.list);
  const dialog = useDialog();
  const dispatch = useDispatch();

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
      !inputs.description
    ) {
      setInvalid(false);
    }
    else {
      setInvalid(true);
      const newProduct = {
        name: inputs.nameProduct,
        image: inputs.imageProduct,
        price: inputs.priceProduct,
        category: inputs.nameCategory,
        description: inputs.description,
      };
      console.log(newProduct);
      const action = addProduct(newProduct);
      dispatch(action);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p className={`${invalid ? "hidden" : " text-xs text-red-400"}`}>Field is not null</p>
        <div className="p-3">
          <input
            type="text"
            placeholder="nameProduct"
            name="nameProduct"
            value={inputs.nameProduct}
            onChange={handleInputChange}
            className="w-3/4 h-8 border-solid border-2 border-gray-400"
          ></input>
        </div>
        {/* <div className="p-3">
          <input
            type="text"
            placeholder="imageProduct"
            name="imageProduct"
            value={inputs.imageProduct}
            onChange={handleInputChange}
            className="w-3/4 h-8 border-solid border-2 border-gray-400"
          ></input>
        </div>
        <div className="p-3">
          <input
            type="text"
            placeholder="priceProduct"
            name="priceProduct"
            value={inputs.priceProduct}
            onChange={handleInputChange}
            className="w-3/4 h-8 border-solid border-2 border-gray-400"
          ></input>
        </div>
        <div className="p-3">
          <input
            type="text"
            placeholder="nameCategory"
            name="nameCategory"
            value={inputs.nameCategory}
            onChange={handleInputChange}
            className="w-3/4 h-8 border-solid border-2 border-gray-400"
          ></input>
        </div>
        <div className="p-3">
          <input
            type="text"
            placeholder="description"
            name="description"
            value={inputs.description}
            onChange={handleInputChange}
            className="w-3/4 h-8 border-solid border-2 border-gray-400"
          ></input>
        </div> */}
        <div>
          <button
            onClick={() => {
              // Сlose the dialog and return the value
              dialog.close();
            }}
          >
            Cancle
          </button>
          <button type="submit" className="w-28 h-10 bg-blue-400 ">
            <span className="text-white">Login</span>
          </button>
        </div>
      </form>
    </div>
  );
}
