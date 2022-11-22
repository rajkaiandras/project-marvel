import React from 'react';

// hooks
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';

// components
import { FavoriteCard } from '../../components/favoriteCard/FavoriteCard';

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
      {/* error display */}
      {error && <p>{error}</p>}

      {/* characters display */}
      {documents &&
        documents
          .filter((document) => document.userId === user.uid)
          .map((document) => {
            const { characterId } = document;

            return <FavoriteCard key={characterId} characterId={characterId} />;
          })}
    </div>
  );
};
