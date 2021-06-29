import Header from './../components/Header';
import Footer from './../components/Footer';
import Navbar from './../components/Navbar';
import Tickets from './../components/Tickets';

function Home() {
  return(
    <>
      <Navbar />
      <Header  />
      <h1>Hello world!</h1>
      <Tickets />
      <Footer />
    </>
  );
}

export default Home;
