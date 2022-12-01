import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// configs
import { marvelApiConfig } from '../../configs/marvelApiConfig';

// hooks
import { useFetch } from '../../hooks/useFetch';

// constants
import { alphabet } from '../../constants/alphabet';

// components
import { LoadingMask } from '../../components/loadingMask/LoadingMask';
import { ComicCard } from '../../components/comicCard/ComicCard';
import { ScrollTop } from '../../components/scrollTop/ScrollTop';

// styles
import './ComicsList.css';

export const ComicsList = () => {
  const [titleStartsWith, setTitleStartsWith] = useState('a');

  // fetching comics
  const { apiComicsEndpoint, limit, timeStamp, publicApiKey, md5Hash } =
    marvelApiConfig;

  const { data, isPending, error } = useFetch(
    `${apiComicsEndpoint}?titleStartsWith=${titleStartsWith}&limit=${limit}&ts=${timeStamp}&apikey=${publicApiKey}&hash=${md5Hash}`
  );

  if (data) console.log(data);

  return (
    <div className="ComicsList">
      <div className="title-container">
        <h2 className="title">Marvel Comics</h2>
        <p className="subtitle">
          The digital experience in your home with thousands of graphics novels
        </p>
      </div>
      <label className="search-bar">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          className="search-input"
          type="text"
          placeholder="Search comic by name..."
          onChange={(e) => {
            if (e.target.value.length >= 3) {
              setTimeout(() => {
                setTitleStartsWith(e.target.value);
              }, 1000);
            } else if (e.target.value.length === 0) {
              setTitleStartsWith('a');
            }
          }}
        ></input>
      </label>
      <div className="alphabet-container">
        {alphabet.map((letter, index) => (
          <p
            key={index}
            className="letter"
            onClick={() => setTitleStartsWith(letter)}
          >
            {letter}
          </p>
        ))}
      </div>
      <div className="comics-cards-container">
        {/* error display */}
        {error && <div className="error">{error}</div>}

        {/* loading mask */}
        {isPending && <LoadingMask />}

        {/* comics display */}
        {data &&
          !isPending &&
          data.data.results
            .filter(
              (comic) =>
                comic.thumbnail.extension === 'jpg' &&
                !comic.thumbnail.path.includes('image_not_available')
            )
            .map((comic) => (
              <Link key={comic.id} to={`/comics/${comic.id}`}>
                <ComicCard
                  title={comic.title}
                  imageUrl={comic.thumbnail.path}
                />
              </Link>
            ))}
      </div>

      {/* scroll to top */}
      <ScrollTop />
    </div>
  );
};
