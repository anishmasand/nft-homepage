import Card from "/components/Card";
import collection from "/data/collection.js";

export default function Cards() {
  const cards = collection.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div>
      <section className="cards-list">{cards}</section>
    </div>
  );
}
