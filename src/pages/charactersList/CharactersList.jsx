import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// database
import { alphabet } from '../../database/alphabet';

// configs
import { marvelApiConfig } from '../../configs/marvelApiConfig';

// customHooks
import { useFetch } from '../../hooks/useFetch';

// components
import { LoadingMask } from '../../components/loadingMask/LoadingMask';
import { CharacterCard } from '../../components/characterCard/CharacterCard';
import { ScrollTop } from '../../components/scrollTop/ScrollTop';

// styles
import './CharactersList.css';

export const CharactersList = () => {
  const [nameStartsWith, setNameStartsWith] = useState('a');

  // fetching characters
  const { apiCharactersEndpoint, limit, timeStamp, publicApiKey, md5Hash } =
    marvelApiConfig;

  const { data, isPending, error } = useFetch(
    `${apiCharactersEndpoint}?nameStartsWith=${nameStartsWith}&limit=${limit}&ts=${timeStamp}&apikey=${publicApiKey}&hash=${md5Hash}`
  );

  return (
    <div className="CharactersList">
      <div className="title-container">
        <h2 className="title">Marvel Characters</h2>
        <p className="subtitle">
          Get hooked on a hearty helping of heroes and villains from the humble
          House of Ideas!
        </p>
      </div>
      <label className="search-bar">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          className="search-input"
          type="text"
          placeholder="Search character by name..."
          onChange={(e) => {
            if (e.target.value.length >= 3) {
              setTimeout(() => {
                setNameStartsWith(e.target.value);
              }, 1000);
            } else if (e.target.value.length === 0) {
              setNameStartsWith('a');
            }
          }}
        ></input>
      </label>
      <div className="alphabet-container">
        {alphabet.map((letter, index) => (
          <p
            key={index}
            className="letter"
            onClick={() => setNameStartsWith(letter)}
          >
            {letter}
          </p>
        ))}
      </div>
      <div className="character-cards-container">
        {/* error display */}
        {error && <div className="error">{error}</div>}

        {/* loading mask */}
        {isPending && <LoadingMask />}

        {/* characters display */}
        {data &&
          !isPending &&
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

      {/* scroll to top */}
      <ScrollTop />
    </div>
  );
};
