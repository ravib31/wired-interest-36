import './App.css';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import HomePage from "./Components/HomePage"


function App() {
    return (
        <div className="App">
            <SignIn/>
            <SignUp/>
           <HomePage />
        </div>
    );
}

export default App;
