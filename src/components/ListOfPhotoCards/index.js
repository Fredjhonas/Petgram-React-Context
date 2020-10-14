import React from 'react';
import { PhotoCard } from '../PhotoCard';

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul style={style}>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  );
};

const style = {
  marginBottom: '40px'
};
