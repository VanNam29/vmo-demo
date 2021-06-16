export function OrderItem(props) {
  const { order } = props;
  return (
    <div className="w-full h-32 top-8">
      <div className="w-2/3 h-32 float-left m-auto relative">
        <div className="h-full w-1/3 float-left absolute left-20">
          <img src={order.image} className="w-24 h-5/6 mt-4"></img>
        </div>
        <div className="w-2/3 h-full absolute left-20 top-12 float-left">
          <p className="text-base top-10 left-0">
            <strong>{order.name}</strong>
          </p>
          <p className="text-base top-10">Quantity: {order.quantity}</p>
          <p className="text-base top-10 left-0">{order.price * order.quantity} VNĐ</p>
        </div>
      </div>
    </div>
  );
}
