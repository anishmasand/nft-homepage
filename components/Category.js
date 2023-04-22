export default function Profile(props) {
  let yel = props.yellow ? "-yellow" : "";
  return (
    <div className={`category` + yel}>
      <p className="category-text">{props.categoryName}</p>
      <p className="category-text">{props.stat}%</p>
    </div>
  );
}
