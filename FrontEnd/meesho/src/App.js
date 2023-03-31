import "./App.css";
import AdminSidebar from "./Components/Admin/Components/AdminSidebar";
import SingleUser from "./Components/Admin/Pages/SingleUser";
import { UserListPage } from "./Components/Admin/Pages/UserListPage";
// import LargeWithAppLinksAndSocial from "./components/Footer";
// import WithSubnavigation1 from "./components/Navbar1";
// import WithSubnavigation2 from "./components/Navbar2";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
// import HomePage from "./Components/HomePage";

function App() {
    return (<div className="App">
        {/* <AdminSidebar /> */}
       {/* <SignUp /> */}
       <SignIn />
       <SignUp />
       <UserListPage />
    </div>);
}

export default App;
