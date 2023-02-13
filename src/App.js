import Pages from "./pages/Pages";
import Search from "./components/SearchedItem";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Search />
      <Pages />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
