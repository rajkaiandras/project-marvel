import './Character.css';
import { useRef } from 'react';

export default function Character({ name, imageUrl }) {
  const characterImage = useRef();
  const horizontalRule = useRef();
  const characterName = useRef();

  const onMouseOverHandler = () => {
    characterImage.current.style.transform = 'scale(1.1)';
    horizontalRule.current.style.height = '98px';
    characterName.current.style.color = 'white';
  };

  const onMouseLeaveHandler = () => {
    characterImage.current.style.transform = 'scale(1)';
    horizontalRule.current.style.height = '4px';
    characterName.current.style.color = 'gray';
  };

  return (
    <div
      className="Character"
      onMouseOver={onMouseOverHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <figure className="character-image-container">
        <img
          ref={characterImage}
          className="character-image"
          src={`${imageUrl}.jpg`}
          alt={name}
        />
      </figure>
      <hr ref={horizontalRule} />
      <p ref={characterName} className="character-name">
        {name}
      </p>
    </div>
  );
}
