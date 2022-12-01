import React from 'react';
import { Link } from 'react-router-dom';

// configs
import { marvelApiConfig } from '../../configs/marvelApiConfig';

// hooks
import { useFetch } from '../../hooks/useFetch';

// components
import { LoadingMask } from '../../components/loadingMask/LoadingMask';
import { ComicCard } from '../../components/comicCard/ComicCard';

// styles
import './ComicsList.css';

export const ComicsList = () => {
  // fetching comics
  const { apiComicsEndpoint, limit, timeStamp, publicApiKey, md5Hash } =
    marvelApiConfig;

  const { data, isPending, error } = useFetch(
    `${apiComicsEndpoint}?limit=${limit}&ts=${timeStamp}&apikey=${publicApiKey}&hash=${md5Hash}`
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
              <ComicCard
                key={comic.id}
                title={comic.title}
                imageUrl={comic.thumbnail.path}
              />
            ))}
      </div>
    </div>
  );
};
