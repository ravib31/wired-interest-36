// import logo from './logo.svg';
import "./App.css";
import LargeWithAppLinksAndSocial from "./components/Footer";

import WithSubnavigation1 from "./components/Navbar1";
import WithSubnavigation2 from "./components/Navbar2";

function App() {
  return (
    <div className="App">
      <WithSubnavigation1 />
      <WithSubnavigation2 />
      <LargeWithAppLinksAndSocial/>
      
    </div>
  );
}

export default App;
