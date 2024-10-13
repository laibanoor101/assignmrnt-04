import Navbar from './navbar/page';
import Footer from './footer/page';
import Card from './card/page';
import About from './About/page';
import Contact from './Contact/page';
import Services from './Services/page';

export default function Home() {
  return (
    <div>
      <Navbar/> <br></br><br></br><br></br>
      <div className="content">
      <h1>Explore the world with us</h1>
      <h1>Your Adventure Awaits</h1>
      <p>
      "Explore the world like never before with our travel blog, where adventure meets inspiration! Join us as we uncover hidden gems, share personal experiences, and provide invaluable tips to make your journeys unforgettable. Whether you're a seasoned traveler or planning your first trip, our stories and guides will ignite your wanderlust and help you navigate the globe with confidence."
      </p>
    </div>
     <Card />
    <Footer />
    <About />
    <Contact />
    <Services />

    </div>
  );
}