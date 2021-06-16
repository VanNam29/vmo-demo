import { useEffect } from "react";
import { FilterProducts } from "../../modules/filter-products/filter-products";

export function FilterPage(props) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section className="">
      <div className="parallax-search relative">
        <div className="absolute w-full">
          <p className="text-white text-2xl mt-8">
            <strong>VMO FOOD </strong>
          </p>
        </div>
      </div>
      <div className="w-2/3 m-auto mt-8 h-auto">
        <FilterProducts propsFilter={props.location.aboutProps} />
      </div>
    </section>
  );
}
