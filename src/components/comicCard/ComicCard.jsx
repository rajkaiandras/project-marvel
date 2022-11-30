import React from 'react';

// styles
import './ComicCard.css';

export const ComicCard = ({ title, imageUrl }) => {
  return (
    <div className="ComicCard">
      <figure className="comic-image-container">
        <img className="comic-image" src={`${imageUrl}.jpg`} alt={title} />
        <figcaption className="comic-title">{title}</figcaption>
      </figure>
    </div>
  );
};
