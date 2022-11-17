import React from 'react';
import { Link } from 'react-router-dom';

// configs
import { marvelApiConfig } from '../../configs/marvelApiConfig';

// customHooks
import { useFetch } from '../../hooks/useFetch';

// components
import LoadingMask from '../../components/loadingMask/LoadingMask';
import CharacterCard from '../../components/characterCard/CharacterCard';

// styles
import './CharactersList.css';

export const CharactersList = () => {
  const { apiEndpoint, limit, timeStamp, publicApiKey, md5Hash } =
    marvelApiConfig;

  const { data, isPending, error } = useFetch(
    `${apiEndpoint}?limit=${limit}&ts=${timeStamp}&apikey=${publicApiKey}&hash=${md5Hash}`
  );

  return (
    <div className="CharactersList">
      {/* error display */}
      {error && <div className="error">{error}</div>}

      {/* loading mask */}
      {isPending && <LoadingMask />}

      {/* character display */}
      {data &&
        data.data.results
          .filter(
            (character) =>
              character.thumbnail.extension === 'jpg' &&
              !character.thumbnail.path.includes('image_not_available')
          )
          .map((character) => (
            <Link key={character.id} to={`/characters/${character.id}`}>
              <CharacterCard
                name={character.name}
                imageUrl={character.thumbnail.path}
              />
            </Link>
          ))}
    </div>
  );
};
