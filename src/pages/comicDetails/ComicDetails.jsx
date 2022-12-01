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

  let bgImage = {};

  if (data) {
    bgImage = {
      backgroundImage: `url(${data.data.results[0].thumbnail.path}.${data.data.results[0].thumbnail.extension})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
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
          <h1 className="comic-title">{data.data.results[0].title}</h1>
        </>
      )}
    </div>
  );
};
