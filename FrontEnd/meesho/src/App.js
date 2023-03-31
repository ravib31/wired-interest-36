import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <div>
      <HomePage/>
      {/* <ProductPage/> */}
// import logo from './logo.svg';
import "./App.css";
import LargeWithLogoLeft from "./components/Footer";

import WithSubnavigation1 from "./components/Navbar1";
import WithSubnavigation2 from "./components/Navbar2";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
// import HomePage from "./components/HomePage"



export default function App() {
  return (
    <div className="App">
      <WithSubnavigation1 />
      <WithSubnavigation2 />

      <SignIn/>
      <SignUp/>
      {/* <HomePage /> */}
      <LargeWithLogoLeft />
    </div>
  );
}

// export default App;
