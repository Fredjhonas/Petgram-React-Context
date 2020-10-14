import React from 'react';
import { FavsWithQuery } from '../container/GetFavorites';
import { Layout } from '../components/Layout';
import { Div, Title, Subtitle } from '../components/Layout/styles';

const title = 'Your favorites';
const subtitle = 'Here you can find your favorites';

export default () => (
  <Layout title={title} subtitle={subtitle}>
    <Div>
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Div>
    <FavsWithQuery />
  </Layout>
);
