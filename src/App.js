import './App.css';
import { Navbar } from "./components/Navbar";
import HomePageProducts from './components/HomePageProducts/HomePageProducts';
import Footer from './components/Footer/Footer';
import HomeBanner from './components/Banner/HomeBanner';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HomeBanner></HomeBanner>
      <HomePageProducts></HomePageProducts>
      <Footer></Footer>
    </div>
  );
}

export default App;
