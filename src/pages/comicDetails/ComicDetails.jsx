import React from 'react';
import { useParams } from 'react-router-dom';

// configs
import { marvelApiConfig } from '../../configs/marvelApiConfig';

// styles
import './ComicDetails.css';

export const ComicDetails = () => {
  // fetching comic details
  const comicId = useParams();
  const { apiComicsEndpoint, limit, timeStamp, publicApiKey, md5Hash } =
    marvelApiConfig;

  return <div className="ComicDetails">{comicId.id}</div>;
};
