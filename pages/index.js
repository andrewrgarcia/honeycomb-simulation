// pages/index.js

import Honeycomb from '../components/Honeycomb';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'space-between' }}>
      <h1 style={{ marginTop: '20px' }}>Honeybee Simulation in a Honeycomb</h1>
      <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <Honeycomb />
      </div>
      <Footer />
    </div>
  );
}
