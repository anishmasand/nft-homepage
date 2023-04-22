import Highlight from "/components/Highlight";
import highlight from "/data/highlight.js";

export default function Highlights() {
  const highlights = highlight.map((item) => {
    return <Highlight key={item.id} {...item} />;
  });

  return (
    <div className="Highlights">
      <section className="cards-list">{highlights}</section>
    </div>
  );
}
