import "./App.css";

import Navbar1 from "./Components/Navbar1";
import Navbar2 from "./Components/Navbar2";
import Footer from "./Components/Footer";
import HomePage from "./Components/Page/HomePage";
import MainRoutes from "./Components/Routes/MainRoutes";
import { CartPage } from "./Components/Page/CartPage";




function App() {
  return (
    <div className="App">
      <CartPage />
      <MainRoutes />
    </div>
  );
}

export default App;
