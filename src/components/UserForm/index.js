/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext } from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Form, Input, Title, Error, Text, Sign } from './styles';
import { SubmitButton } from '../SubmitButton';
import { Context } from '../../Context';

export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const email = useInputValue('');
  const password = useInputValue('');
  const { hasAccount, setHasAccount } = useContext(Context);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Title>{title}</Title>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input required disabled={disabled} placeholder='Email' {...email} />
        <Input required disabled={disabled} placeholder='Password' type='password' {...password} />

        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}

      {!hasAccount ? (
        <Text>
          Have an account ?{' '}
          <Sign onClick={() => setHasAccount(!hasAccount)}>Sign in</Sign>
        </Text>
      ) : (
        <Text>
          Don`t have an account ?{' '}
          <Sign onClick={() => setHasAccount(!hasAccount)}>Sign up</Sign>
        </Text>

      )}
    </>
  );
};
