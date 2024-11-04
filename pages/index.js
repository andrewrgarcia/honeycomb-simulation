import Honeycomb from '../components/Honeycomb';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Honeybee Simulation in a Honeycomb</h1>
      <Honeycomb />
      <Footer />
    </div>
  );
}
