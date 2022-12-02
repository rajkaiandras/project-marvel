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

  // stlying background image
  let bgImage = {};

  if (data) {
    bgImage = {
      backgroundImage: `url(${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center 30%',
      backgroundSize: 'cover',
      filter: 'blur(8px)',
    };
  }

  return (
    <div className="ComicDetails">
      {/* error display */}
      {error && <div className="error">{error}</div>}

      {/* loading mask */}
      {isPending && <LoadingMask />}

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
              <ul className="creator-list">
                {data.data.results[0].creators.items.map((creator) => {
                  return (
                    <li>
                      <h3>{creator.role}</h3>
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
