import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// configs
import { marvelApiConfig } from '../../configs/marvelApiConfig';

// hooks
import { useFetch } from '../../hooks/useFetch';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useFirestore } from '../../hooks/useFirestore';
import { useCollection } from '../../hooks/useCollection';

// components
import { LoadingMask } from '../../components/loadingMask/LoadingMask';

// styles
import './CharacterDetails.css';

export const CharacterDetails = () => {
  const { user } = useAuthContext();
  const [isFavorite, setIsFavorite] = useState(false);
  const { documents, error: collectionError } =
    useCollection('favoriteCharacters');
  const { addDocument, deleteDocument, response } =
    useFirestore('favoriteCharacters');

  // fetching character details
  const { apiCharactersEndpoint, timeStamp, publicApiKey, md5Hash } =
    marvelApiConfig;
  const characterId = useParams();
  const { id } = characterId;
  const apiCharacterDetailsEndpoint = `${apiCharactersEndpoint}/${id}`;
  const { data, isPending, error } = useFetch(
    `${apiCharacterDetailsEndpoint}?ts=${timeStamp}&apikey=${publicApiKey}&hash=${md5Hash}`
  );

  // checking (is card favorite at actual user)
  useEffect(() => {
    if (documents) {
      if (
        documents.some((document) => {
          return document.userId === user.uid && document.characterId === id;
        })
      ) {
        setIsFavorite(true);
      }
    }
  }, [documents]);

  // set character to favorite
  const setFavorite = () => {
    setIsFavorite(true);
    addDocument({
      userId: user.uid,
      characterId: id,
    });
  };

  // set character to unfavorite
  const setUnFavorite = () => {
    setIsFavorite(false);
    /* deleteDocument(documentId); */
  };

  return (
    <div className="CharacterDetails">
      {/* error display */}
      {error && <div className="error">{error}</div>}

      {/* loading mask */}
      {isPending && <LoadingMask />}

      {data && (
        <div className="details-container">
          <div className="image-wrapper">
            <img
              className="character-image"
              src={
                data.data.results[0].thumbnail.path +
                '.' +
                data.data.results[0].thumbnail.extension
              }
              alt={data.data.results[0].name}
            />
          </div>
          <div className="content">
            <div className="title-container">
              <hr />
              <h2 className="title">Character Details</h2>
              <hr />
            </div>
            <h3 className="character-name">{data.data.results[0].name}</h3>
            {isFavorite && (
              <i onClick={setUnFavorite} className="fa-solid fa-heart"></i>
            )}
            {!isFavorite && (
              <i onClick={setFavorite} className="fa-regular fa-heart"></i>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
