import Pages from "./pages/Pages";
import Search from "./components/SearchedItem";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Search />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
