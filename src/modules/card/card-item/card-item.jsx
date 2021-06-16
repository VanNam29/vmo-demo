import { useState } from "react";
import { useDispatch } from "react-redux";
import { changePurchase } from "../../../services/card.services";

export function CardItem(props) {
  const { card } = props;
  const [check, setCheckPurchase] = useState(card.checkPurchase);
  const [quantity, setQuantity] = useState(card.quantity);
  const dispatch = useDispatch();

  const onChangePurchase = () => {
    setCheckPurchase(!check);
    const action = changePurchase(card);
    dispatch(action);
  };

  const desQuantity = card => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    props.desQuantity(card);
  };
  const incQuantity = card => {
    if (quantity < card.inventory) {
      setQuantity(quantity + 1);
    }
    props.incQuantity(card);
  };

  const handleChange = event => {
    setQuantity(event.target.value);
  };

  const handleRemoveCard = card => {
    props.handleRemoveCard(card);
  };

  return (
    // <div className="w-full h-28">
    <tr className="w-full h-28">
      <td className="w-4 h-28 p-2">
        <i
          className={`far fa-check-circle mt-2 text-xl ${check ? "text-green-500" : ""}`}
          onClick={onChangePurchase}
          role="button"
        ></i>
      </td>
      <td className="w-1/2 h-28">
        <div className="w-full h-full float-left">
          <div className="h-full w-1/3 float-left">
            <img src={card.image} className="w-24 h-5/6 mt-4"></img>
          </div>
          <div className="w-2/3 h-full float-left mt-2 relative">
            <p className="text-xl absolute top-10 left-0">
              <strong>{card.name}</strong>
            </p>
          </div>
        </div>
      </td>
      <td className="w-1/6 text-xl">
        <strong>{card.price}</strong>
      </td>
      <td className="w-1/6">
        <div className="w-full h-6 pt-2 pl-4">
          <button onClick={() => desQuantity(card)} className="h-6 w-7 float-left">
            <i className="fas fa-minus text-xs"></i>
          </button>
          <input
            value={quantity}
            onChange={handleChange}
            className="w-7 h-6 float-left pl-1"
          ></input>
          <button onClick={() => incQuantity(card)} className="h-6 w-7 float-left">
            <i className="fas fa-plus text-xs"></i>
          </button>
        </div>
      </td>
      <td className="w-1/6 text-xl">
        <strong>{card.totalPrice * card.quantity}</strong>
      </td>
      <td>
        <i
          onClick={() => handleRemoveCard(card)}
          className="fas fa-trash-alt text-xl mt-1 text-red-500"
          role="button"
        ></i>
      </td>
    </tr>
    //   <div className="h-0.5 w-full bg-gray-300 mt-8"></div>
    // </div>
  );
}
