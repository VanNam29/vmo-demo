import { Link } from "react-router-dom";

export function Header() {
  return (
    <section className="bg-white h-20 w-2/3 flex font-sans m-auto">
      <div className="flex-1 flex">
        <div className="text-left pt-4 relative">
          <i className="fas fa-phone-alt absolute mt-1 mt-1"></i>
          <p className="absolute ml-4 text-xs mt-1 hover:underline">01234356789</p>
        </div>
        {/* <div className="text-left pt-4 relative flex-1">
          <i className="fas fa-map-marker-alt absolute mt-1"></i>
          <p className="text-xs text-opacity-50 absolute ml-4 mt-1">8fl, 18 Ton That Thuyet</p>
        </div> */}
      </div>
      <div className="flex-1 p-1.5 relative">
        <p className="text-4xl">
          <strong className="text-yellow-500">V</strong>
          <strong className=" text-gray-500">MO</strong>
        </p>
        <p className="text-xs text-gray-400 absolute bottom-2 left-36">NOWFOOD</p>
      </div>

      <div className="flex-1 relative">
        <div className="absolute right-0 top-5 border-solid border-2 border-light-gray-500 h-8">
          <input
            type="text"
            className="w-full h-full top-0"
            placeholder="Tìm kiếm..."
            value=""
          ></input>
          <div className="h-7 w-8 bg-black absolute top-0 right-0" role="button">
            <i className="fas fa-search text-white mt-1.5"></i>
          </div>
        </div>
        <div className="absolute w-full h-6 bottom-0">
          <i className="fas fa-cart-plus bottom-1 absolute right-28"></i>
          <p className="text-base bottom-0 absolute right-32 text-min">
            <Link to="/card">Giỏ hàng(0)</Link>
          </p>
          <i className="fas fa-user bottom-1 absolute right-0"></i>
          <p className="text-base bottom-0 absolute right-5">
            <Link to="/login">Tài khoản</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
