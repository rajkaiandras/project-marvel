import React from 'react';
import { Link } from 'react-router-dom';

// configs
import { marvelApiConfig } from '../../configs/marvelApiConfig';

// customHooks
import { useFetch } from '../../hooks/useFetch';

// components
import Character from '../../components/character/Character';

// styles
import './CharactersList.css';

export const CharactersList = () => {
  const { apiEndpoint, limit, timeStamp, publicApiKey, md5Hash } =
    marvelApiConfig;

  const { data, isPending, error } = useFetch(
    `${apiEndpoint}?limit=${limit}&ts=${timeStamp}&apikey=${publicApiKey}&hash=${md5Hash}`
  );

  data ? console.log(data) : console.log('No data to fetch');

  return (
    <div className="CharactersList">
      {/* loading mask */}
      {isPending && <div>Loading...</div>}

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
              <Character
                name={character.name}
                imageUrl={character.thumbnail.path}
              />
            </Link>
          ))}

      {/* error display */}
      {error && <div>{error}</div>}
    </div>
  );
};
