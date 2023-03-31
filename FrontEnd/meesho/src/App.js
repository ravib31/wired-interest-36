import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <div>
      <HomePage/>
      {/* <ProductPage/> */}
// import logo from './logo.svg';
import "./App.css";
import LargeWithAppLinksAndSocial from "./components/Footer";

import WithSubnavigation1 from "./components/Navbar1";
import WithSubnavigation2 from "./components/Navbar2";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <div className="App">
      <WithSubnavigation1 />
      <WithSubnavigation2 />
      <LargeWithAppLinksAndSocial />
      <SignIn />
      <SignUp />
      <HomePage />
    </div>
  );
}

export default App;
