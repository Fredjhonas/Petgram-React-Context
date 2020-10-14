import React from 'react';
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery';
import { Layout } from '../components/Layout';
import { Div, Title } from '../components/Layout/styles';

export default ({ detailId }) => (
  <Layout title={`Photography ${detailId}`}>
    <Div>
      <Title>{`Photography ${detailId}`}</Title>
    </Div>
    <PhotoCardWithQuery id={detailId} />
  </Layout>
);
