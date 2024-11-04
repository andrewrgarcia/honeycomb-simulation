import { useState, useEffect } from 'react';
import styles from '../styles/Honeycomb.module.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Honeycomb = () => {
  const [bees, setBees] = useState(Array.from({ length: 10 }, () => ({ x: getRandomInt(5), y: getRandomInt(5) })));
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBees((prevBees) =>
        prevBees.map((bee) => ({
          x: (bee.x + getRandomInt(3) - 1 + 5) % 5,
          y: (bee.y + getRandomInt(3) - 1 + 5) % 5,
        }))
      );
    }, 500);
    return () => clearInterval(interval);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className={styles.honeycomb}>
      {Array.from({ length: 5 }).map((_, row) => (
        <div key={row} className={styles.row}>
          {Array.from({ length: 5 }).map((_, col) => (
            <div key={col} className={styles.cell}>
              {bees.some((bee) => bee.x === col && bee.y === row) ? '🐝' : ''}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Honeycomb;
