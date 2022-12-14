import React from 'react';

// hooks
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';

// components
import { FavoriteCard } from '../../components/favoriteCard/FavoriteCard';
import { LoadingMask } from '../../components/loadingMask/LoadingMask';

// styles
import './FavoritesList.css';

export const FavoritesList = () => {
  // get favorite characters from Firestore
  const { documents, error } = useCollection('favoriteCharacters');

  // to filter out user associated favorite characters
  const { user } = useAuthContext();

  if (documents) console.log(documents);

  return (
    <div className="FavoritesList">
      <div className="backdrop-blur"></div>

      {/* error display */}
      {error && <p className="error">{error}</p>}

      {/* loading mask */}
      {documents === null && error === null && <LoadingMask />}

      {/* characters display */}
      {documents &&
        documents
          .filter((document) => document.userId === user.uid)
          .sort((a, b) => {
            return a.createdAt.seconds - b.createdAt.seconds;
          })
          .map((document) => {
            const { id: documentId, characterId } = document;

            return (
              <FavoriteCard
                key={characterId}
                documentId={documentId}
                characterId={characterId}
              />
            );
          })}
    </div>
  );
};
