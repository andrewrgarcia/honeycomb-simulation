import { useState, useEffect } from 'react';
import styles from '../styles/Honeycomb.module.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Adjusted hexToPixel for pointy-top orientation
function hexToPixel(q, r, size) {
  const x = size * (3 / 2) * q;
  const y = size * Math.sqrt(3) * (r + q / 2);
  return { x, y };
}

const Honeycomb = () => {
  const hexRadius = 7; // Larger grid radius for more cells
  const hexSize = 40; // Increase size of each hex cell
  const [bees, setBees] = useState([]);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // Initialize bee positions
    setBees(
      Array.from({ length: 10 }, () => ({
        q: getRandomInt(hexRadius * 2 + 1) - hexRadius,
        r: getRandomInt(hexRadius * 2 + 1) - hexRadius,
      }))
    );
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBees((prevBees) =>
        prevBees.map((bee) => ({
          q: bee.q + getRandomInt(3) - 1,
          r: bee.r + getRandomInt(3) - 1,
        }))
      );
    }, 500);
    return () => clearInterval(interval);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className={styles.honeycomb}>
      {Array.from({ length: hexRadius * 2 + 1 }, (_, r) =>
        Array.from({ length: hexRadius * 2 + 1 }, (_, q) => {
          const adjustedQ = q - hexRadius;
          const adjustedR = r - hexRadius;
          const s = -adjustedQ - adjustedR;
          if (Math.abs(adjustedQ) + Math.abs(adjustedR) + Math.abs(s) <= hexRadius) {
            const { x, y } = hexToPixel(adjustedQ, adjustedR, hexSize);
            const hasBee = bees.some((bee) => bee.q === adjustedQ && bee.r === adjustedR);
            return (
              <div
                key={`${adjustedQ}-${adjustedR}`}
                className={styles.cell}
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                {hasBee ? '🐝' : ''}
              </div>
            );
          }
          return null;
        })
      )}
    </div>
  );
};

export default Honeycomb;
