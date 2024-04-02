import Navbar from "./components/HomePage/NavBar/NavigationBar.jsx";
import Categories from "./components/HomePage/categories/Categories.jsx";
import Carousal from "./components/HomePage/Carousal/carousal.jsx";
import Card from "./components/HomePage/Cards/card.jsx";
const App = () => {
  return (
    <>
      <Navbar />
      <Categories />
      <Carousal />
      <Card />
    </>
  );
};

export default App;
