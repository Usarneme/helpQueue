import Header from './../components/Header';
import Footer from './../components/Footer';
import Navbar from './../components/Navbar';
import Tickets from './../components/Tickets';

function Home() {
  return(
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <Header  />
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Tickets />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
