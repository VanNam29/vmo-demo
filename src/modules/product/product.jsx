import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { addCard, incQuantityCard } from "../../services/card.services";
import { useCustomCard } from "../card/customCard";

export function Product(props) {
  const [hover, setHover] = useState(false);
  const [hoverOptionPurchase, setHoverOptionPurchase] = useState(false);
  const [hoverOptionCard, setHoverOptionCard] = useState(false);
  const dispatch = useDispatch();
  const { product } = props;
  const listCard = useCustomCard();

  const onMouseOver = () => {
    setHover(true);
  };

  const onMouseOut = () => {
    setHover(false);
  };

  const onOverOptionPurchase = () => {
    setHoverOptionPurchase(true);
  };

  const onOutOptionPurchase = () => {
    setHoverOptionPurchase(false);
  };

  const onOverOptionCard = () => {
    setHoverOptionCard(true);
  };

  const onOutOptionCard = () => {
    setHoverOptionCard(false);
  };

  const onClickDetailProduct = () => {};

  const onClickAddCard = () => {
    const check = listCard.filter(card => card.idProduct === product.id);
    if (check[0]) {
      const actions = incQuantityCard(check[0]);
      dispatch(actions);
    }
    else {
      const newCard = {
        id: uuidv4(),
        idProduct: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        totalPrice: product.price,
        image: product.image,
        inventory: product.quantity,
        checkPurchase: true,
      };
      const action = addCard(newCard);
      dispatch(action);
    }
  };

  return (
    <section className="w-full h-96 pl-2 pr-2 pt-3">
      <div
        className={`w-full h-full relative border border-gray-800 ${hover ? "shadow-xl" : ""}`}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        <Link to={{ pathname: `/product/${product.id}`, product }}>
          <div className="h-4/5 w-full" onClick={() => onClickDetailProduct(product)}>
            <div className="w-full h-full overflow-hidden">
              <img
                className={`w-full h-full transition duration-500 ease-in-out ${
                  hover ? "zoom-image" : ""
                }`}
                src={product.image}
              ></img>
            </div>
          </div>
        </Link>

        <div className={`h-1/12 w-48  absolute bottom-20 p-1 ml-3 flex ${hover ? "" : "hidden"}`}>
          <div
            title="Mua hang"
            className={`bg-gray-100 rounded-full border-solid border-2 border-red-600 flex-1 mr-2 ${
              hoverOptionPurchase ? "bg-red-500" : ""
            }`}
            onMouseOver={onOverOptionPurchase}
            onMouseOut={onOutOptionPurchase}
            role="button"
          >
            <span className={`text-xs ${hoverOptionPurchase ? "text-white" : "text-red-500"}`}>
              Mua hàng
            </span>
          </div>
          <div
            title="Them vao gio hang"
            className={`bg-gray-100 rounded-full border-solid border-2 border-red-600 flex-1 ${
              hoverOptionCard ? "bg-red-500" : ""
            }`}
            onClick={onClickAddCard}
            onMouseOver={onOverOptionCard}
            onMouseOut={onOutOptionCard}
            role="button"
          >
            <i
              className={`fas fa-cart-plus ${hoverOptionCard ? "text-white" : "text-red-500"}`}
            ></i>
          </div>
        </div>
        <Link to={{ pathname: `/product/${product.id}`, product }}>
          <div
            className="h-1/5 w-full absolute bottom-4"
            onClick={() => onClickDetailProduct(product)}
          >
            <p className="font-sans text-xl font-medium pt-4">{product.name}</p>
            <p className="font-sans text-red-500 text-base italic pt-1">
              {product.price}
              <span> VNĐ</span>
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
