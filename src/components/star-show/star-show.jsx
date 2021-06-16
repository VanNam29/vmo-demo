import { Star } from "./component/star";

// eslint-disable-next-line arrow-parens
const roundToOne = (num) => {
  return +(Math.round(num + "e+1") + "e-1");
};
export function StarShow(props) {
  const { rating } = props;
  const resRating = roundToOne(5 - rating);
  const showStar = () => {
    for (let i = 0; i < rating; i++) {
      <Star />;
    }
  };

  return (
    <div>
      <p>{rating - resRating}</p>
      <div className="">{showStar}</div>
      <div className=""></div>
    </div>
  );
}
