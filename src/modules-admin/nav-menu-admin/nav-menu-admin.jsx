import { Link } from "react-router-dom";

export function NavMenuAdmin(props) {
  const { user } = props;
  return (
    <div className="w-full h-full md:w-46">
      <div className="w-full h-1/4 relative">
        <div className="absolute w-full h-auto top-7">
          {user.photoUrl ? (
            <img className="w-16 h-16 m-auto rounded-full" src={user.photoUrl}></img>
          ) : (
            <img
              className="w-16 h-16 m-auto rounded-full "
              src="https://photo-baomoi.zadn.vn/w700_r1/2020_04_15_180_34718461/cf6ada6aa3294a771338.jpg"
            ></img>
          )}
        </div>
        <div className="w-full h-12 absolute top-24 text-center">
          <p className="text-gray-500 text-base">{user.displayName}</p>
          <p className="text-gray-400 text-xs">{user.email}</p>
        </div>
      </div>
      <div className="w-full h-3/4">
        <Link to="/admin">
          <div className="w-full h-12 p-2" role="button">
            <div className="w-1/3 h-full float-left pl-4">
              <i className="fab fa-apple text-2xl"></i>
            </div>
            <div className="w-2/3 h-full float-left">
              <span>Product</span>
            </div>
          </div>
        </Link>

        <Link to="/admin/category">
          <div className="w-full h-12 p-2" role="button">
            <div className="w-1/3 h-full float-left pl-4">
              <i className="fas fa-book"></i>
            </div>
            <div className="w-2/3 h-full float-left">
              <span>Category</span>
            </div>
          </div>
        </Link>

        <Link to="/admin/cart">
          <div className="w-full h-12 p-2" role="button">
            <div className="w-1/3 h-full float-left pl-4">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <div className="w-2/3 h-full float-left">
              <span>Cart</span>
            </div>
          </div>
        </Link>

        <Link to="/admin/order">
          <div className="w-full h-12 p-2" role="button">
            <div className="w-1/3 h-full float-left pl-4">
              <i className="fab fa-apple text-2xl"></i>
            </div>
            <div className="w-2/3 h-full float-left">
              <span>Order</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
