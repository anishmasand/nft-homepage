import "/styles/style.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// import Card from "/components/Card";
// import data from "/data/data.js";
// export default function Home() {
//   const cards = data.map((item) => {
//     return <Card key={item.id} {...item} />;
//   });

//   return (
//     <div>
//       <section className="cards-list">{cards}</section>
//     </div>
//   );
// }
