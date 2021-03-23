import NavBar from "../../components/navbar/navbar.component";
import Header from "../../components/header/header.component";
import Collection from "../../components/collection/collection.component";
import Discover from "../../components/discover/discover.component";

const Homepage = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Collection />
      <Discover />
    </div>
  );
};

export default Homepage;
