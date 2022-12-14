import { useState } from 'react';
import Footer from './components/Footer';
import './assets/styles/styles.scss';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card />
      <Footer />
    </>
  );
}

export default App;
