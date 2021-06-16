export function ButtonAddCard(props) {
  const handleAddCard = () => {
    props.handleAddCard();
  };

  return (
    <div className="w-full h-full bg-black relative" role="button" onClick={handleAddCard}>
      <p className="text-xs text-white absolute top-4 left-5">THÊM VÀO GIỎ HÀNG</p>
    </div>
  );
}
