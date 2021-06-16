// import { useState } from "react";
import { useDispatch } from "react-redux";
import { CardItem } from "./card-item/card-item";
import { useCustomCard } from "./customCard";
// import firebase from "../../services/firebase";
import {
  deleteCard,
  desQuantityCard,
  getAllCard,
  incQuantityCard,
} from "../../services/card.services";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export function Card() {
  const listCard = useCustomCard();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCard());
  });

  const funcTotalMoney = listCard => {
    let total = null;
    listCard.forEach(card => {
      if (card.checkPurchase) {
        total += card.price * card.quantity;
      }
    });
    return total;
  };
  const totalMoney = funcTotalMoney(listCard);

  const handleRemoveCard = card => {
    const action = deleteCard(card);
    dispatch(action);
  };

  const desQuantity = card => {
    const action = desQuantityCard(card);
    dispatch(action);
  };

  const incQuantity = card => {
    const action = incQuantityCard(card);
    dispatch(action);
  };

  return (
    <div>
      {listCard.length > 0 ? (
        <div className="bg-white p-2">
          <p className="text-2xl">
            <strong>CARD</strong>
          </p>
          <table className="table-auto mt-6 w-full table-auto">
            <thead>
              <tr>
                <td className="w-4 h-16"></td>
                <td colSpan="1">Product</td>
                <td colSpan="1">Price</td>
                <td colSpan="1">Quantity</td>
                <td colSpan="1">Total Price</td>
                <td>Option</td>
              </tr>
            </thead>
            <div className="h-0.5 w-full bg-gray-300 absolute mt-2"></div>
            <tbody className="mt-4 w-full">
              {listCard.map(card => (
                <CardItem
                  key={card.id}
                  card={card}
                  handleRemoveCard={handleRemoveCard}
                  desQuantity={desQuantity}
                  incQuantity={incQuantity}
                />
              ))}
            </tbody>
          </table>
          <div className="h-0.5 w-full bg-gray-300 mt-8"></div>
          <div className="h-16 w-full relative">
            <p className="left-0 top-4 absolute">
              Total money:{" "}
              <strong className="text-2xl text-red-500">
                {totalMoney > 0 ? totalMoney : 0}
                <span> VNĐ</span>
              </strong>
            </p>
            <Link to="/order">
              <button className="w-28 h-10 right-0 top-4 absolute bg-black">
                <span className="text-white text-sm">PURCHASE</span>
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="h-28">
          <p className="text-2xl p-4">Bạn chưa có sản phẩm nào trong giỏ hàng!!!</p>
        </div>
      )}
    </div>
  );
}
