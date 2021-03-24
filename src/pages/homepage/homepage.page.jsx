import NavBar from "../../components/navbar/navbar.component";
import Header from "../../components/header/header.component";
import Collection from "../../components/collection/collection.component";
import Discover from "../../components/discover/discover.component";
import Slide from "../../components/slide/slide.component";

const Homepage = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Collection />
      <Discover />
      <Slide />
    </div>
  );
};

export default Homepage;
