import Header from './../components/Header';
import Footer from './../components/Footer';
import Navbar from './../components/Navbar';
import Tickets from './../components/Tickets';

function Home() {
  return(
    <div style={{ background: 'rgb(214, 225, 235)', minHeight: '100vh' }}>
      <Navbar />
      <Header  />
      <Tickets />
      <Footer />
    </div>
  );
}

export default Home;
