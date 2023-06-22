
import Navbar from '../components/Navbar.js';
import Landingpage from '../components/swiper';
import Foods from '../components/Foods.js';
import Services from '../components/Services.js';
import Customer from '../components/Customer.js';
import Restaurant from '../components/Restaurant.js';
import Comingsoon from '../components/Comingsoon.js';
import Footer from '../components/Footer.js';


function Home() {
  return (
    <div className="App">
      <Navbar />
      <Landingpage /> 
      <Foods />
      <Services />
      <Customer />
      <Restaurant />
      <Comingsoon />
      <Footer />     
    </div>
  );
}

export default Home;