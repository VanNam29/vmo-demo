import { useState } from "react";
import { useDispatch } from "react-redux";
import { CommentItem } from "../../components/comment-item/comment-item";
import { updateProductComment } from "../../services/product.services";
import { useCustomProduct } from "../customGetAll/customGetAll";

export function Comments(props) {
  const [valueComment, setValueComment] = useState("");
  const dispatch = useDispatch();

  const productRealtimes = useCustomProduct();

  let comments = null;

  const { product } = props;
  if (productRealtimes) {
    const index = productRealtimes.findIndex(productReal => productReal.id === product.id);
    comments = productRealtimes[index].comment;
  }

  const handleSubmit = event => {
    event.preventDefault();
    const newComment = valueComment;
    const action = updateProductComment(product.id, newComment);
    dispatch(action);
    setValueComment("");
  };

  const handleChange = event => {
    setValueComment(event.target.value);
  };

  return (
    <section>
      <div className="w-full top-0">
        {comments ? (
          comments.map((comm, index) => <CommentItem key={index} comment={comm} />)
        ) : (
          <p>Chưa có dữ liệu comment</p>
        )}
      </div>
      <div className="w-full h-36 p-4">
        <p className="text-gray-500 text-sm text-left">Write your comment:</p>
        <form className="relative w-full" onSubmit={handleSubmit} onChange={handleChange}>
          <textarea
            value={valueComment}
            className="h-16 w-full absolute left-0 p-2 border-solid border-2 border-light-gray-500"
          ></textarea>
          <button
            type="submit"
            className="absolute w-16 h-16 border-solid border-2 border-light-gray-500 right-0 bg-blue-100"
          >
            <i className="fas fa-paper-plane text-3xl"></i>
          </button>
        </form>
      </div>
    </section>
  );
}
