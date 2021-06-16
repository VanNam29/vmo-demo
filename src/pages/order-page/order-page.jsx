// import React from "react";

import { useCustomCard } from "../../modules/customGetAll/customGetAll";
import { Order } from "../../modules/order/order";
// import { OrderForm } from "../../modules/order/order-form";

export function OrderPage() {
  const listCard = useCustomCard();
  const listOrder = listCard.filter(card => card.checkPurchase === true);
  return (
    <div>
      <div className="w-full h-4">
        <p className="text-2xl mt-2">
          <strong>ORDER</strong>
        </p>
      </div>
      {/* <div className="flex">
        <div className="flex-1">
          <Order listOrder={listOrder} />
        </div>
        <div className="flex-1">
          <OrderForm/>
        </div>
      </div> */}
      <Order listOrder={listOrder} />
    </div>
  );
}
