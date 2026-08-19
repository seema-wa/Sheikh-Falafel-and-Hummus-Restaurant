import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Menu from "./components/Menu";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Helmet>
        <title>Sheikh of Falafel and Hummus | Jeddah, Al Salamah</title>
        <meta
          name="description"
          content="Sheikh of Falafel and Hummus — authentic Levantine hummus and falafel in Al Salamah, Jeddah since 2001. Visit us on Nahdat Al Sharq Street or order via WhatsApp."
        />
        <meta name="keywords" content="hummus jeddah, falafel jeddah, al salamah restaurant, sheikh of falafel and hummus" />
        <meta property="og:title" content="Sheikh of Falafel and Hummus" />
        <meta
          property="og:description"
          content="Authentic Levantine hummus and falafel in Al Salamah, Jeddah since 2001."
        />
        <meta property="og:image" content="/images/hero.jpg" />
        <meta property="og:type" content="restaurant.restaurant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Helmet>

      <main className="min-h-screen bg-[#FBF4E4]">
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Menu />
        <Location />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
