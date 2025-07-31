import { Link } from "react-router";
import Banner from "../components/Banner";
// import FoodCard from "./FoodCard";

// import Donor from "../components/Donor";
import Faq from "../components/Faq";
import BannerSection from "./BannerSection";
import FeaturedSection from "./FeaturedSection";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <BannerSection></BannerSection>
      <FeaturedSection></FeaturedSection>
      <ContactUs></ContactUs>
      <Faq></Faq>
    </>
  );
};

export default Home;
