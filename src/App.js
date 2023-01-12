import './App.css';
import { Navbar } from "./components/Navbar";
import HomePageProducts from './components/HomePageProducts/HomePageProducts';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HomePageProducts></HomePageProducts>
      <Footer></Footer>
    </div>
  );
}

export default App;
