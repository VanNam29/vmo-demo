import { Link } from "react-router-dom";

export function ProductItemAdmin(props) {
  const { list, index } = props;

  const handleEdit = list => {
    props.handleEdit(list);
  };

  const handleAdminDeleteProduct = id => {
    props.handleAdminDeleteProduct(id);
  };

  return (
    <tr className="w-full h-20">
      <td>{index + 1}</td>
      <td>{list.name}</td>
      <td>
        <img className="w-16 h-16 m-auto" src={list.image}></img>
      </td>
      <td>{list.quantity}</td>
      <td>{list.price}</td>
      <td className="flex">
        <div className="flex-1 relative">
          <Link to={{ pathname: `admin/product-edit/${list.id}`, list }}>
            <button
              className="w-14 h-8 bg-blue-300 absolute top-6 right-2"
              onClick={() => handleEdit(list)}
            >
              Edit
            </button>
          </Link>
        </div>
        <div className="flex-1 relative">
          <button
            className="w-14 h-8 bg-red-500 absolute top-6 left-2"
            onClick={() => handleAdminDeleteProduct(list.id)}
            role="button"
          >
            <span className="text-white">Delete</span>
          </button>
        </div>
      </td>
    </tr>
  );
}
