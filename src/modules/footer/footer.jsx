export function Footer() {
  return (
    <section className="pt-8 flex w-2/3 m-auto h-full">
      <div className="flex-1 p-1.5 relative">
        <p className="text-4xl">
          <strong className="text-yellow-300">V</strong>
          <strong className=" text-gray-300">MO</strong>
        </p>
        <p className="text-sm text-gray-400 absolute left-16">NOWFOOD</p>
        <div className="flex w-full absolute top-20 h-8 mt-1">
          <i className="fab fa-facebook-square text-3xl text-gray-500 ml-12"></i>
          <i className="fab fa-instagram-square text-3xl text-gray-500 ml-2"></i>
          <i className="fab fa-youtube-square text-3xl text-gray-500 ml-2"></i>
        </div>
        <p className="absolute mt-16 text-xs text-gray-400">
          Copyrights © 2021 by VMO FOOD . Powered by VMO Holdings
        </p>
      </div>
      <div className="flex-1">
        <p className="text-white">VỀ CHÚNG TÔI</p>
        <ul className="pl-14 mt-2">
          <li className="text-white text-left text-xs">Home</li>
          <li className="text-white text-left text-xs">Search</li>
          <li className="text-white text-left text-xs">Card</li>
          <li className="text-white text-left text-xs">Order</li>
          <li className="text-white text-left text-xs">Contact</li>
        </ul>
      </div>
      <div className="flex-1">
        <p className="text-white">CHÍNH SÁCH</p>
        <ul className="pl-16 mt-2">
          <li className="text-white text-left text-xs">Chính sách thanh toán</li>
          <li className="text-white text-left text-xs">Chính sách đổi trả</li>
          <li className="text-white text-left text-xs">Chính sách vận chuyển</li>
          <li className="text-white text-left text-xs">Chính sách bảo mật</li>
        </ul>
      </div>
      <div className="flex-1">
        <p className="text-white">LIÊN HỆ</p>
        <ul className="pl-20 mt-2">
          <li className="text-white text-left text-xs">8fl, 18 TTT</li>
          <li className="text-white text-left text-xs">Hotline: 012345678</li>
          <li className="text-white text-left text-xs">
            8:30 - 19:00 tất cả các ngày trong tuần (Trừ Chủ Nhật & các Ngày Lễ, Tết Âm Lịch
            8/02/2021 - 17/02/2021)
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <p className="text-white">ĐĂNG KÝ NHẬN TIN</p>
      </div>
    </section>
  );
}
