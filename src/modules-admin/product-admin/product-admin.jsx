import { useDispatch } from "react-redux";
import { useCustomProduct } from "../../modules/customGetAll/customGetAll";
import { ProductItemAdmin } from "./product-item-admin/product-item-admin";
import { deleteProduct } from "../../services/product.services";
import { useHistory } from "react-router";
import { useEffect } from "react";

export function ProductAdmin() {
  const listProduct = useCustomProduct();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleAdd = () => {
    console.log("add");
    history.push("/admin/product-add");
  };

  const handleAdminDeleteProduct = id => {
    console.log(id);
    const action = deleteProduct(id);
    dispatch(action);
  };

  const handleEdit = () => {};

  return (
    <div className="mt-2 h-5/6">
      <div className="w-full text-center">
        <p className="p-2 text-2xl">Product</p>
      </div>
      <div className="w-full h-10 pr-12">
        <button className="w-20 h-8 float-right bg-blue-500" onClick={handleAdd}>
          <span className="text-white ">Add</span>
        </button>
      </div>
      <table className="table-fixed w-11/12 h-full m-auto bg-white text-center bg-local">
        <thead>
          <tr className="bg-gray-300 h-8">
            <th className="w-1/12 ">STT</th>
            <th className="w-1/6 ">NAME</th>
            <th className="w-1/4 ">IMAGE</th>
            <th className="w-1/6 ">QUANTITY</th>
            <th className="w-1/6 ">PRICE</th>
            <th className="w-1/6 ">OPTION</th>
          </tr>
        </thead>
        <tbody>
          {listProduct ? (
            listProduct.map((product, index) => (
              <ProductItemAdmin
                key={product.id}
                index={index}
                list={product}
                handleAdminDeleteProduct={handleAdminDeleteProduct}
                handleEdit={handleEdit}
              />
            ))
          ) : (
            <p>not have data</p>
          )}
        </tbody>
      </table>
    </div>
  );
}
