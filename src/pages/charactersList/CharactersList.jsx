import React from 'react';
import { Link } from 'react-router-dom';

// configs
/* import { marvelApiConfig } from '../../configs/marvelApiConfig'; */

// hooks
import { useFetch } from '../../hooks/useFetch';

// components
import Character from '../../components/character/Character';

// styles
import './CharactersList.css';

export const CharactersList = () => {
  /* const { apiEndpoint, limit, timeStamp, publicApiKey, md5Hash } =
    marvelApiConfig; */

  const apiEndpoint = 'http://gateway.marvel.com/v1/public/characters';
  const limit = '100';
  const timeStamp = '1'; /* Date.now(); */
  /* const privateApiKey = '48dbef645afbcafc5f0f47b477710eb700edd201'; */
  const publicApiKey = 'e0ad2376684bf39059edab0e642cf460';
  const md5Hash =
    '9b6a3948740843db9a5fe0ef867400c7'; /* md5(timeStamp+privateKey+publicKey) */

  const { data, isPending, error } = useFetch(
    `${apiEndpoint}?limit=${limit}&ts=${timeStamp}&apikey=${publicApiKey}&hash=${md5Hash}`
  );

  if (data) {
    console.log(data);
  }

  return (
    <div className="Characters">
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
    </div>
  );
};
