import React from 'react';
import { useParams } from 'react-router-dom';

// configs
import { marvelApiConfig } from '../../configs/marvelApiConfig';

// hooks
import { useFetch } from '../../hooks/useFetch';

// components
import { LoadingMask } from '../../components/loadingMask/LoadingMask';

// styles
import './ComicDetails.css';

export const ComicDetails = () => {
  // fetching comic details
  const comicId = useParams();
  const { apiComicsEndpoint, timeStamp, publicApiKey, md5Hash } =
    marvelApiConfig;

  const { data, isPending, error } = useFetch(
    `${apiComicsEndpoint}/${comicId.id}?ts=${timeStamp}&apikey=${publicApiKey}&hash=${md5Hash}`
  );

  if (data) console.log(data);

  // styling background image
  let bgImage = {};

  if (data) {
    bgImage = {
      backgroundImage: `url(${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center 30%',
      backgroundSize: 'cover',
      filter: 'blur(8px) brightness(0.5)',
    };
  }

  return (
    <div className="ComicDetails">
      {/* error display */}
      {error && <div className="error">{error}</div>}

      {/* loading mask */}
      {isPending && <LoadingMask />}

      {/* display comic details */}
      {data && (
        <>
          <div className="bg-image-wrapper">
            <div style={bgImage} className="bg-image"></div>
          </div>
          <div className="content-container">
            <img
              className="comic-cover"
              src={`${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension}`}
              alt=""
            />
            <div className="comic-details">
              <h1 className="comic-title">{data.data.results[0].title}</h1>
              <div className="published-container">
                <h3 className="published-title">Published:</h3>
                <p className="published-date">
                  {data.data.results[0].dates[0].date.slice(0, 10)}
                </p>
              </div>
              <ul className="creator-list">
                {data.data.results[0].creators.items.map((creator, index) => {
                  return (
                    <li key={index}>
                      <h3>{`${creator.role}:`}</h3>
                      <p>{creator.name}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
