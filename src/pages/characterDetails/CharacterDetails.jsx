import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// configs
import { marvelApiConfig } from '../../configs/marvelApiConfig';

// custom hooks
import { useFetch } from '../../hooks/useFetch';

// components
import LoadingMask from '../../components/loadingMask/LoadingMask';

// styles
import './CharacterDetails.css';

export const CharacterDetails = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  // fetching character details
  const { apiCharactersEndpoint, timeStamp, publicApiKey, md5Hash } =
    marvelApiConfig;
  const characterId = useParams();
  const { id } = characterId;
  const apiCharacterDetailsEndpoint = `${apiCharactersEndpoint}/${id}`;
  const { data, isPending, error } = useFetch(
    `${apiCharacterDetailsEndpoint}?ts=${timeStamp}&apikey=${publicApiKey}&hash=${md5Hash}`
  );

  return (
    <div className="CharacterDetails">
      {/* error display */}
      {error && <div className="error">{error}</div>}

      {/* loading mask */}
      {isPending && <LoadingMask />}

      {data && (
        <div className="details-container">
          <div className="image-wrapper">
            <img
              className="character-image"
              src={
                data.data.results[0].thumbnail.path +
                '.' +
                data.data.results[0].thumbnail.extension
              }
              alt={data.data.results[0].name}
            />
          </div>
          <div className="content">
            <div className="title-container">
              <hr />
              <h2 className="title">Character Details</h2>
              <hr />
            </div>
            <h3 className="character-name">{data.data.results[0].name}</h3>
            {isFavorite && (
              <i
                onClick={() => setIsFavorite(!isFavorite)}
                className="fa-solid fa-heart"
              ></i>
            )}
            {!isFavorite && (
              <i
                onClick={() => setIsFavorite(!isFavorite)}
                className="fa-regular fa-heart"
              ></i>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
