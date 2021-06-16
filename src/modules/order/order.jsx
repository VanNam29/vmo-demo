import { OrderItem } from "./order-item/order-item";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addOrder } from "../../services/order.services";
import { OrderForm } from "./order-form";
import { useHistory } from "react-router";
import { useEffect } from "react";

export function Order(props) {
  const { listOrder } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const list = [];
  if (listOrder) {
    listOrder.forEach(order => {
      list.push(order);
    });
  }

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const purchaseSuccess = (check, info) => {
    if (check) {
      const newOrder = {
        id: uuidv4(),
        listProduct: list,
        total: totalMoney,
        infor: info,
      };
      const action = addOrder(newOrder);
      dispatch(action);
      history.push("/order-success");
    }
  };

  const funcTotalMoney = listOrder => {
    let total = null;
    listOrder.forEach(card => {
      if (card.checkPurchase) {
        total += card.price * card.quantity;
      }
    });
    return total;
  };
  const totalMoney = funcTotalMoney(listOrder);
  return (
    // <div className="pt-8">
    //   {listOrder ? (
    //     listOrder.map(order => <OrderItem key={order.id} order={order} />)
    //   ) : (
    //     <p>Bạn chưa chọn mua sản phẩm nào!!</p>
    //   )}
    //   <div className="h-20 float-left pl-16 pt-4">
    //     <span className="text-2xl text-red-500">
    //       <strong>Total Money: {totalMoney}</strong>
    //     </span>
    //   </div>
    // </div>
    <div className="flex">
      <div className="flex-1">
        <div className="pt-8">
          {listOrder ? (
            listOrder.map(order => <OrderItem key={order.id} order={order} />)
          ) : (
            <p>Bạn chưa chọn mua sản phẩm nào!!</p>
          )}
          <div className="h-20 float-left pl-16 pt-4">
            <span className="text-2xl text-red-500">
              <strong>Total Money: {totalMoney}</strong>
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <OrderForm purchaseSuccess={purchaseSuccess} />
      </div>
    </div>
  );
}
