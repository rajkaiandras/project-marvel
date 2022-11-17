import { useState } from 'react';

// styles
import './ScrollTop.css';

export default function ScrollTop() {
  const [visibility, setVisibility] = useState(false);

  window.addEventListener('scroll', () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className="scroll-top-btn">
      {visibility && (
        <i
          className="scroll-top-logo fa-solid fa-circle-chevron-up"
          onClick={handleClick}
        ></i>
      )}
    </button>
  );
}
