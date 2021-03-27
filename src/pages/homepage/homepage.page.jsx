import NavBar from "../../components/navbar/navbar.component";
import Header from "../../components/header/header.component";
import Collection from "../../components/collection/collection.component";
import Discover from "../../components/discover/discover.component";
import Slider from "../../components/slider/slider.component";
import SlideInfo from "../../components/slideInfo/slideInfo.component";

const Homepage = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Slider />
      <SlideInfo />
      <Collection />
      <Discover />
    </div>
  );
};

export default Homepage;
