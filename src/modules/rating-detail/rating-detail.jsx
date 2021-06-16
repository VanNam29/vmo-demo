import { Star } from "../../components/star-show/component/star";
import { StarEmpty } from "../../components/star-show/component/star-empty";

export function RatingDetail(props) {
  const { rating } = props;
  return (
    <div className="w-full h-full pl-3">
      <div className="w-full h-1/5 relative">
        <div className="h-full w-1/3 absolute">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <div className="absolute left-28 top-2.5 h-1.5 w-1/2 rounded-full bg-gray-200">
          <div className="absolute left-0 top-0 h-1.5 w-11/12 rounded-full bg-gray-400"></div>
        </div>
        <p className="absolute right-5 text-sm top-0.5 text-gray-500">{rating[5]}</p>
      </div>
      <div className="w-full h-1/5 relative">
        <div className="h-full w-1/3 absolute">
          <Star />
          <Star />
          <Star />
          <Star />
          <StarEmpty />
        </div>
        <div className="absolute left-28 top-2.5 h-1.5 w-1/2 rounded-full bg-gray-200">
          <div className="absolute left-0 top-0 h-1.5 w-1/3 rounded-full bg-gray-400"></div>
        </div>
        <p className="absolute right-7 text-sm top-0.5 text-gray-500">{rating[4]}</p>
      </div>
      <div className="w-full h-1/5 relative">
        <div className="h-full w-1/3 absolute">
          <Star />
          <Star />
          <Star />
          <StarEmpty />
          <StarEmpty />
        </div>
        <div className="absolute left-28 top-2.5 h-1.5 w-1/2 rounded-full bg-gray-200">
          <div className="absolute left-0 top-0 h-1.5 w-1/6 rounded-full bg-gray-400"></div>
        </div>
        <p className="absolute right-7 text-sm top-0.5 text-gray-500">{rating[3]}</p>
      </div>
      <div className="w-full h-1/5 relative">
        <div className="h-full w-1/3 absolute">
          <Star />
          <Star />
          <StarEmpty />
          <StarEmpty />
          <StarEmpty />
        </div>
        <div className="absolute left-28 top-2.5 h-1.5 w-1/2 rounded-full bg-gray-200">
          <div className="absolute left-0 top-0 h-1.5 w-1/12 rounded-full bg-gray-400"></div>
        </div>
        <p className="absolute right-7 text-sm top-0.5 text-gray-500">{rating[2]}</p>
      </div>
      <div className="w-full h-1/5 relative">
        <div className="h-full w-1/3 absolute">
          <Star />
          <StarEmpty />
          <StarEmpty />
          <StarEmpty />
          <StarEmpty />
        </div>
        <div className="absolute left-28 top-2.5 h-1.5 w-1/2 rounded-full bg-gray-200">
          <div className="absolute left-0 top-0 h-1.5 w-1/12 rounded-full bg-gray-400"></div>
        </div>
        <p className="absolute right-7 text-sm top-0.5 text-gray-500">{rating[1]}</p>
      </div>
    </div>
  );
}
