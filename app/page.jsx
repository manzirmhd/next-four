import Card from "./components/Card";
import CardOne from "./components/CardOne";
import CardTwo from "./components/CardTwo";
import CustomerCard from "./components/CustomerCard";
import CustomerComp from "./components/CustomerComp";
import Dessert from "./components/Dessert";
import Hero from "./components/Hero";
import HeroComp from "./components/HeroComp";
import HeroTwo from "./components/HeroTwo";
import InputBox from "./components/InputBox";
import LastComp from "./components/LastComp";
import Offer from "./components/Offer";
import Pagination from "./components/Pagination";
import Rating from "./components/Rating";
import RatingStar from "./components/RatingStar";
import SearchBox from "./components/SearchBox";
import Footer from "./footer/page";
import Navbar from "./navbar/page";

export default function Home() {
  return (
    <main >
      <Navbar/>
      <Hero/>
      <HeroTwo/>
      <Offer/>
      <Dessert/>
      <CustomerComp/>
      <Pagination/>
      <LastComp/>
      <Footer/>
    </main>
  );
}
