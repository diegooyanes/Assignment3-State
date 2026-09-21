import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

const products = [
  {
    id: 1,
    name: "Imperial Leather Mate",
    price: 64.99,
    image:
      "https://placehold.co/600x400/4f6b3c/ffffff?text=Imperial+Mate",
    description:
      "A handcrafted calabash mate wrapped in premium leather for a timeless ritual.",
  },
  {
    id: 2,
    name: "Organic Yerba Mate",
    price: 16.5,
    image:
      "https://placehold.co/600x400/8a9a5b/ffffff?text=Organic+Yerba",
    description:
      "Smooth organic yerba with balanced flavor and a naturally energizing finish.",
  },
  {
    id: 3,
    name: "Stainless Steel Bombilla",
    price: 22.99,
    image:
      "https://placehold.co/600x400/b56f45/ffffff?text=Premium+Bombilla",
    description:
      "A durable stainless steel bombilla with a removable filter for easy cleaning.",
  },
];

function App() {
  return (
    <div className="app">
      <Header storeName="Tomate un Mate" />

      <main>
        <Hero
          title="Make every sip a ritual"
          subtitle="Discover premium mate essentials selected for flavor, tradition, and everyday moments."
          ctaText="Explore the collection"
        />

        <section className="products-section" id="products">
          <div className="section-heading">
            <p>Our favorites</p>
            <h2>Build your perfect mate setup</h2>
            <span>
              Thoughtfully selected essentials for beginners and lifelong mate
              drinkers.
            </span>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                description={product.description}
              />
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <p>More than a drink</p>
          <h2>A ritual meant to be shared</h2>
          <span>
            Mate brings people together. Our mission is to make this tradition
            accessible through quality products, thoughtful design, and respect
            for its South American roots.
          </span>
        </section>
      </main>

      <Footer
        storeName="Tomate un Mate"
        email="hello@tomateunmate.com"
        year={2026}
      />
    </div>
  );
}

export default App;