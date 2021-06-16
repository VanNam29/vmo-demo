import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { ButtonAddCard } from "../../components/button-add-card/button-add-card";
import { ButtonPurchase } from "../../components/button-purchase/button-purchase";
import { Star } from "../../components/star-show/component/star";
// import { RatingDetail } from "../../modules/rating-detail/rating-detail";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
// import { addCard, incQuantityCard } from "../../services/card.services";
import { useCustomCard } from "../../modules/card/customCard";
import { addCard, incQuantityCard } from "../../services/card.services";
import { useCustomComment, useCustomProduct } from "../../modules/customGetAll/customGetAll";
import { Comments } from "../../modules/comments/comments";

export function ProductDetail() {
  const [isComment, setIsComment] = useState(false);
  // const [currProduct, setCurrProduct] = useState(null);
  const listProduct = useCustomProduct();
  // const location = useLocation();
  const dispatch = useDispatch();
  // const rating = location.product.totalRating;
  const listCard = useCustomCard();
  const listComment = useCustomComment();

  const { id } = useParams();


  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  let currentProduct = null;
  let currentComment = null;
  if (listProduct) {
    currentProduct = listProduct.filter(product => product.id === id);
  }
  if (listComment) {
    currentComment = listComment.filter(comment => comment.idProduct === id);
  }

  if (currentComment) {
    console.log("currentComment", currentComment[0]);
  }

  if (currentProduct) {
    console.log("currentProduct", currentProduct[0]);
  }

  const handleDescription = () => {
    if (isComment) {
      setIsComment(false);
    }
  };

  const handleComment = () => {
    if (!isComment) {
      setIsComment(true);
    }
  };

  const handleAddCard = () => {
    const product = listCard.filter(card => card.idProduct === currentProduct[0].id);
    if (product[0]) {
      const actions = incQuantityCard(product[0]);
      dispatch(actions);
    }
    else {
      const newCard = {
        id: uuidv4(),
        idProduct: currentProduct[0].id,
        name: currentProduct[0].name,
        price: currentProduct[0].price,
        quantity: 1,
        totalPrice: currentProduct[0].price,
        image: currentProduct[0].image,
        inventory: currentProduct[0].quantity,
        checkPurchase: true,
      };
      const action = addCard(newCard);
      dispatch(action);
    }
  };

  return (
    <section className="h-auto w-full">
      <div className="parallax-product-detail relative opacity-60">
        <div className="absolute w-full h-12 pt-16">
          <p className="text-white text-3xl font-sans">
            <strong>{currentProduct && currentProduct[0].name}</strong>
          </p>
          <p className="text-white text-base">
            <Link to="/">Home</Link>/{currentProduct && currentProduct[0].name}
          </p>
        </div>
      </div>

      <div className="w-8/12 m-auto pt-6">
        <div className="flex">
          <div className="flex-1">
            <img src={currentProduct && currentProduct[0].image} className="h-96 w-46"></img>
          </div>
          <div className="flex-1 text-left">
            <p className="ml-2 text-2xl h-1/6">
              <strong>{currentProduct && currentProduct[0].name}</strong>
            </p>
            <div className="relative left-0 p-2 h-5/6">
              <div className="w-full h-8 pt-4">
                <p className="float-left text-sm">
                  Kind: {currentProduct && currentProduct[0].nameCategory}
                </p>
              </div>
              <div className="w-full h-12 mt-4">
                <p className="float-left mt-1 text-2xl text-red-500">
                  <strong>
                    {currentProduct && currentProduct[0].price}
                    <span> VNĐ</span>
                  </strong>
                </p>
              </div>
              <div className="w-full h-8 pt-2">
                <p className=" float-left text-sm">
                  Inventory: {currentProduct && currentProduct[0].quantity}
                </p>
              </div>
              <div className="w-full h-12 flex absolute bottom-0">
                <div className="flex-1">
                  <ButtonAddCard handleAddCard={handleAddCard} />
                </div>
                <div className="flex-1">
                  <ButtonPurchase />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="h-full w-3/4 float-right">
              <div className="w-full h-1/6">
                <div className="w-full h-5/6 border-solid border-2 border-gray-500 relative">
                  <span className="absolute left-3 bottom-3 text-xs">
                    <strong>CHIA SẺ:</strong>
                  </span>
                  <div
                    className="absolute w-12 h-4 bg-blue-500 top-4 left-16 rounded-sm relative"
                    role="button"
                  >
                    <i className="fas fa-thumbs-up text-white absolute left-1 text-xs top-0.5"></i>
                    <p className="text-xs absolute left-5 text-white">Like</p>
                  </div>
                  <div
                    className="absolute w-10 h-4 bg-blue-500 top-0 left-32 rounded-sm relative"
                    role="button"
                  >
                    <span className="text-white text-xs absolute left-1">Share</span>
                  </div>
                </div>
              </div>
              <div className="w-full h-5/6">
                <div className="w-full h-full border-solid border-2 border-gray-500">
                  <div className="w-full h-2/5">
                    <p className="p-2 text-xs break-words text-left">
                      <strong>
                        Sản phẩm này sẽ tới tay bạn chỉ trong 3-5 ngày làm việc, KHÔNG ÁP DỤNG CHÍNH
                        SÁCH ĐỔI TRẢ KHI: Sản phẩm mua trong chương trình khuyến mại.
                      </strong>
                    </p>
                    <div className="h-0.5 w-11/12 bg-gray-500 m-auto"></div>
                  </div>
                  <div className="w-full h-3/5 float-left">
                    <div className="w-full h-1/4 relative">
                      <i className="fas fa-truck-moving absolute text-2xl top-2 left-4"></i>
                      <span className="absolute text-xs left-14 top-1">
                        <strong>GIAO HÀNG TOÀN QUỐC</strong>
                      </span>
                      <span className="absolute text-xs left-14 top-4">
                        Nhận hàng trong 2-7 ngày
                      </span>
                    </div>
                    <div className="w-full h-1/4 relative">
                      <i className="fas fa-medal absolute text-2xl top-2 left-4"></i>
                      <span className="absolute text-xs left-14 top-1">
                        <strong>CHẤT LƯỢNG ĐẢM BẢO</strong>
                      </span>
                      <span className="absolute text-xs left-14 top-4">Top thương hiệu uy tín</span>
                    </div>
                    <div className="w-full h-1/4 relative">
                      <i className="fas fa-phone-alt absolute text-2xl top-2 left-4"></i>
                      <span className="absolute text-xs left-14 top-1">
                        <strong>HỖ TRỢ NHANH CHÓNG</strong>
                      </span>
                      <span className="absolute text-xs left-14 top-4">
                        Liên hệ hotline 1900.0000
                      </span>
                    </div>
                    <div className="w-full h-1/4 relative">
                      <i className="fas fa-donate absolute text-2xl top-2 left-4"></i>
                      <span className="absolute text-xs left-14 top-1">
                        <strong> TIÊN PHONG </strong>
                      </span>
                      <span className="absolute text-xs left-14 top-4">Món ăn đặc biệt</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Danh gia */}
        <div className="w-1/3 h-44">
          <div className="h-20 w-full float-left">
            <div className="h-full w-16 float-left">
              <p className="text-3xl pt-8 pl-4">
                {/* <strong>{currentProduct[0].totalRating && currentProduct[0].totalRating}
                </strong> */}
              </p>
            </div>
            <div className="h-full w-28 float-left">
              <div className="h-6 pt-8">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p className="float-left pt-3 pl-3 text-sm text-gray-400">{} interview</p>
            </div>
          </div>
          <div className="h-28 w-full float-left">
            {/* {currentProduct[0].rating ? (
              <RatingDetail rating={currentProduct[0].rating} />
            ) : (
              <RatingDetail rating={[]} />
            )} */}
          </div>
        </div>
      </div>

      <div className="w-2/3 m-auto h-20">
        <div className="h-0.5 w-full bg-gray-700 mt-20"></div>
        <div className="h-14 w-full float-left">
          <div
            className="h-full w-36 relative text-xs float-left"
            role="button"
            onClick={handleDescription}
          >
            <span className="absolute left-0 bottom-1">
              <strong>DESCRIPTION</strong>
            </span>
            <div
              className={`h-0.5 w-16 absolute bottom-0 left-2 ${
                isComment ? "bg-gray-200" : "bg-gray-700"
              }`}
            ></div>
          </div>
          <div
            className="h-full w-36 relative text-xs float-left"
            role="button"
            onClick={handleComment}
          >
            <span className="absolute left-2 bottom-1">
              <strong>COMMENT</strong>
            </span>
            <div
              className={`h-0.5 w-12 absolute bottom-0 left-4 ${
                isComment ? "bg-gray-700" : "bg-gray-200"
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div className="w-2/3 m-auto">
        {isComment ? (
          <div className="w-full relative">
            {currentProduct ? (
              <Comments product={currentProduct.comment} />
            ) : null}
          </div>
        ) : (
          <div className="w-ful h-48 relative">
            <p className="absolute left-0 text-sm text-gray-600">
              {currentProduct && currentProduct[0].description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
