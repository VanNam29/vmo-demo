import { useDispatch } from "react-redux";
// import { useFirestoreConnect } from "react-redux-firebase";
import { Slider } from "../../modules/sliders/sliders";
import { Product } from "../../modules/product/product";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProduct } from "../../services/product.services";
import { useCustomCategory, useCustomProduct } from "../../modules/customGetAll/customGetAll";

export function ProductPage() {
  const [hoverSeeAll, setHoverSeeAll] = useState(false);
  const dispatch = useDispatch();
  const productList = useCustomProduct();
  const categorys = useCustomCategory();

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(getAllProduct);
  }, []);

  const onMouseOverSeeAll = () => {
    if (!hoverSeeAll) {
      setHoverSeeAll(true);
    }
  };

  const onMouseOutSeeAll = () => {
    if (hoverSeeAll) {
      setHoverSeeAll(false);
    }
  };

  return (
    <section className="w-full bg-gray-100">
      <div className="h-1/3 w-full">
        <Slider />
      </div>
      <div className="w-2/3 border-solid m-auto pt-4">{/* <SearchFilterProducts /> */}</div>
      <div className="w-2/3 m-auto">
        {!categorys ?
          null :
          categorys.map(category => (
            <>
              <div key={category.id} className="bg-white">
                <div className="h-12 mt-16">
                  <h3 className="text-xl pt-4 font-sansleft-0 pl-2 top-2">
                    <strong>{category.name}</strong>
                  </h3>
                  <div className="w-full h-0.5 mt-1">
                    <div className="h-full w-16 bg-gray-500 m-auto"></div>
                  </div>
                </div>
                <div className="w-full m-auto pt-1 grid grid-cols-4">
                  {productList
                    .filter(item => item.nameCategory === category.name)
                    .splice(0, 4)
                    .map(product => (
                      <Product key={product.id} product={product} />
                    ))}
                </div>
                <div className="w-full h-11 mt-3">
                  <div
                    className={`w-48 m-auto h-9 pt-1 border-solid border-4 border-black ${
                      hoverSeeAll ? "bg-black" : ""
                    }`}
                    onMouseOver={onMouseOverSeeAll}
                    onMouseOut={onMouseOutSeeAll}
                  >
                    <Link to={{ pathname: "/filter", aboutProps: category.name }}>
                      <p className={`text-sm ${hoverSeeAll ? "text-white" : ""}`}>
                          XEM TẤT CẢ SẢN PHẨM
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
      <div className="parallax w-full mt-12 relative">
        <div className="m-auto absolute w-full top-12">
          <p className="text-4xl text-white">
            <strong>MÓN ĂN TRUYỀN THỐNG VIỆT</strong>
          </p>
          <p className="text-xl text-white">Niềm tin của mọi nhà</p>
        </div>
      </div>
    </section>
  );
}
