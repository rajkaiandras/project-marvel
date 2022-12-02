import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

// configs
import { marvelApiConfig } from '../../configs/marvelApiConfig';

// hooks
import { useFetch } from '../../hooks/useFetch';
import { useFirestore } from '../../hooks/useFirestore';

// styles
import './FavoriteCard.css';

export const FavoriteCard = ({ documentId, characterId }) => {
  // card effect style
  const FavoriteCard = useRef();
  const characterImage = useRef();
  const horizontalRule = useRef();
  const characterName = useRef();
  const faAngleRight = useRef();

  const onMouseOverHandler = () => {
    characterImage.current.style.transform = 'scale(1.1)';
    horizontalRule.current.style.height = '150px';
    characterName.current.style.color = 'white';
    faAngleRight.current.style.color = 'white';
  };

  const onMouseLeaveHandler = () => {
    characterImage.current.style.transform = 'scale(1)';
    horizontalRule.current.style.height = '4px';
    characterName.current.style.color = 'gray';
    faAngleRight.current.style.color = 'red';
  };

  const unfavoriteCharacter = () => {
    FavoriteCard.current.style.opacity = '0';
    setTimeout(() => {
      deleteDocument(documentId);
    }, 500);
  };

  // fetching character details
  const { apiCharactersEndpoint, timeStamp, publicApiKey, md5Hash } =
    marvelApiConfig;
  const apiCharacterDetailsEndpoint = `${apiCharactersEndpoint}/${characterId}`;
  const { data, error } = useFetch(
    `${apiCharacterDetailsEndpoint}?ts=${timeStamp}&apikey=${publicApiKey}&hash=${md5Hash}`
  );

  // delete character from favorite
  const { deleteDocument } = useFirestore('favoriteCharacters');

  return (
    <>
      {/* error display */}
      {error && <div className="error">{error}</div>}

      {/* character display */}
      {data && (
        <div
          className="FavoriteCard"
          ref={FavoriteCard}
          onMouseOver={onMouseOverHandler}
          onMouseLeave={onMouseLeaveHandler}
        >
          <figure className="character-image-container">
            <img
              ref={characterImage}
              className="character-image"
              src={`${data.data.results[0].thumbnail.path}.jpg`}
              alt={data.data.results[0].name}
            />
          </figure>
          <Link to={`/characters/${characterId}`}>
            <div className="character-name-container">
              <hr ref={horizontalRule} />
              <p ref={characterName} className="character-name">
                {data.data.results[0].name}
              </p>
              <i ref={faAngleRight} className="fa-solid fa-angle-right"></i>
            </div>
          </Link>
          <i
            className="unfavorite fa-solid fa-heart"
            onClick={unfavoriteCharacter}
          ></i>
        </div>
      )}
    </>
  );
};
