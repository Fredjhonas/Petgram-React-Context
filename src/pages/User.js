/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext } from 'react';
import { Context } from '../Context';
import { SubmitButton } from '../components/SubmitButton';
import { Layout } from '../components/Layout';
import { Title } from '../components/Layout/styles';

export default () => {
  const { removeAuth } = useContext(Context);
  return (
    <Layout title='Login'>
      <div style={style.div}>
        <Title>User</Title>
        <SubmitButton onClick={removeAuth}>Log Out</SubmitButton>
      </div>
    </Layout>
  );
};

const style = {
  div: {
    marginLeft: '20px',
    marginRight: '20px'
  }
};
