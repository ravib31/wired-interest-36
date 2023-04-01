
import "./App.css"
import MainRoutes from "./components/Routes/MainRoutes";

import "./App.css";
// import AdminSidebar from "./Components/Admin/Components/AdminSidebar";
// import SingleUser from "./Components/Admin/Pages/SingleUser";
// import { Navbar1 } from "./components/Navbar1";
// import LargeWithAppLinksAndSocial from "./components/Footer";
// import WithSubnavigation1 from "./components/Navbar1";
// import WithSubnavigation2 from "./components/Navbar2";
// import SignIn from "./components/SignIn";
// import SignUp from "./Components/SignUp";
import HomePage from "./components/HomePage.jsx"


function App() {
    return (<div className="App">

        {/* <AdminSidebar /> */}
       {/* <SignUp /> */}
       {/* <SignIn /> */}
      <HomePage/>
      

      <MainRoutes />
    </div>);
}

export default App;
