export function Slider() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide w-full h-full"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100 h-full"
            src="http://www.fishy.vn/upload/hinhanh/752850.jpg"
            alt="First slide"
          ></img>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100 h-1/3"
            src="https://amthucvanho.com.vn/wp-content/uploads/2019/02/imgpsh_fullsize_anim.jpg"
            alt="Second slide"
          ></img>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100 h-full"
            src="https://bizweb.dktcdn.net/100/419/197/themes/811628/assets/slider_2.jpg?1615893552583"
            alt="Third slide"
          ></img>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
