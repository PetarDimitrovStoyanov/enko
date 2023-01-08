import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contacts from "./components/Contacts";

function App() {

    return (
        <div className="wrapper">
            <Header />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
