export function CommentItem(props) {
  const { comment } = props;
  return (
    <div className="w-full p-4 relative">
      <img
        className="w-8 h-8"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
      ></img>
      <span className="absolute top-5 left-16 text-xs text-gray-400">incognito</span>
      <span className="absolute top-9 left-16 text-sm text-gray-600">{comment}</span>
    </div>
  );
}
