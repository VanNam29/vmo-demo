import { Product } from "../../product/product";

export function ListProduct(props) {
  const { product } = props;
  return (
    <section className="w-full m-auto pt-1 flex">
      <div className="flex-1">
        <Product product={product} />
      </div>
    </section>
  );
}
