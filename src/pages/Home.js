import React from 'react';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards';
import { Layout } from '../components/Layout';

const HomePage = ({ id }) => {
  return (
    <Layout title='Your pet photo app' subtitle='With Petgram you can find the best photos of domestic animals'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>

  );
};

export default React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id;
});
