import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Card from "./components/Card";
import { cardsDataArray } from "./cardsData";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards__container">
        {cardsDataArray.map((cardData) => (
          <Card key={cardData.title} cardData={cardData} />
        ))}
      </section>
    </div>
  );
}

export default App;
