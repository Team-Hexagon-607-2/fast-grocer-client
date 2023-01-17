import './App.css';
import { Navbar } from "./components/Navbar";
import HomePageProducts from './components/HomePageProducts/HomePageProducts';
import Footer from './components/Footer/Footer';
import NewsLetter from './components/NewsLetter/NewsLetter';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HomePageProducts></HomePageProducts>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
}

export default App;
