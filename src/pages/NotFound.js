import React from 'react';
import ErrorNotFound from '../assets/Error-404.jpg';

export default () => (
  <div>
    <img style={style} src={ErrorNotFound} />
  </div>
);

const style = {
  marginLeft: '-45px',
  padding: '20% 0 0 0',
  width: '125%'
};
