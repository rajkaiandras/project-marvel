import React, { useRef } from 'react';

// configs
import { marvelApiConfig } from '../../configs/marvelApiConfig';

// hooks
import { useFetch } from '../../hooks/useFetch';

// styles
import './FavoriteCard.css';

export const FavoriteCard = ({ characterId }) => {
  // card effect style
  const characterImage = useRef();
  const horizontalRule = useRef();
  const characterName = useRef();

  const onMouseOverHandler = () => {
    characterImage.current.style.transform = 'scale(1.1)';
    horizontalRule.current.style.height = '100px';
    horizontalRule.current.style.borderRadius = '0 0 20px 0';
    characterName.current.style.color = 'white';
  };

  const onMouseLeaveHandler = () => {
    characterImage.current.style.transform = 'scale(1)';
    horizontalRule.current.style.height = '4px';
    horizontalRule.current.style.borderRadius = '0';
    characterName.current.style.color = 'gray';
  };

  // fetching character details
  const { apiCharactersEndpoint, timeStamp, publicApiKey, md5Hash } =
    marvelApiConfig;
  const apiCharacterDetailsEndpoint = `${apiCharactersEndpoint}/${characterId}`;
  const { data, isPending, error } = useFetch(
    `${apiCharacterDetailsEndpoint}?ts=${timeStamp}&apikey=${publicApiKey}&hash=${md5Hash}`
  );

  return (
    <div
      className="CharacterCard"
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
};
