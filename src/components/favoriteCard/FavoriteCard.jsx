import React, { useRef } from 'react';

// configs
import { marvelApiConfig } from '../../configs/marvelApiConfig';

// hooks
import { useFetch } from '../../hooks/useFetch';
import { useFirestore } from '../../hooks/useFirestore';

// components
import { LoadingMask } from '../../components/loadingMask/LoadingMask';

// styles
import './FavoriteCard.css';

export const FavoriteCard = ({ documentId, characterId }) => {
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

  // delete character from favorite
  const { deleteDocument } = useFirestore('favoriteCharacters');

  return (
    <>
      {/* error display */}
      {error && <div className="error">{error}</div>}

      {/* loading mask */}
      {isPending && <LoadingMask />}

      {/* character display */}
      {data && (
        <div
          className="FavoriteCard"
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
          <hr ref={horizontalRule} />
          <p ref={characterName} className="character-name">
            {data.data.results[0].name}
          </p>
          <i
            className="unfavorite fa-solid fa-heart"
            onClick={() => deleteDocument(documentId)}
          ></i>
        </div>
      )}
    </>
  );
};
