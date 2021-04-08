// import NavBar from "../../components/navbar/navbar.component";
import Header from "../../components/header/header.component";
// import Collection from "../../components/collection/collection.component";
// import Discover from "../../components/discover/discover.component";
import Slider from "../../components/slider/slider.component";
import SlideInfo from "../../components/slideInfo/slideInfo.component";
import List from "../../components/list/list.component";
import Banner from "../../components/banner/banner.component";
import Outro from "../../components/outro/outro.component";

const Homepage = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <Header />
      <Banner />
      <Slider />
      <SlideInfo />
      <List />
      <Outro />
      {/* <Collection />
      <Discover /> */}
      {/* <Button /> */}
    </div>
  );
};

export default Homepage;
