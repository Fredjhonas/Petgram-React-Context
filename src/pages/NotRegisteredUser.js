/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext } from 'react';
import { Context } from '../Context';
import { UserForm } from '../components/UserForm';
import { RegisterMutation } from '../container/RegisterMutation';
import { LoginMutation } from '../container/LoginMutation';

export default () => {
  const { activateAuth } = useContext(Context);
  const { hasAccount, setHasAccount } = useContext(Context);
  return <>
    {hasAccount
      ? (

        <LoginMutation>
          {
            (login, { data, loading, error }) => {
              const onSubmit = ({ email, password }) => {
                const input = { email, password };
                const variables = { input };
                login({ variables }).then(({ data }) => {
                  const { login } = data;
                  activateAuth(login);
                });
              };

              const errorMsg = error && 'User not exist or password incorrect.';

              return <UserForm disabled={loading} error={errorMsg} title='Sign In' onSubmit={onSubmit} />;
            }
          }
        </LoginMutation>
      ) : (

        <RegisterMutation>
          {
            (register, { data, loading, error }) => {
              const onSubmit = ({ email, password }) => {
                const input = { email, password };
                const variables = { input };
                register({ variables }).then(({ data }) => {
                  const { signup } = data;
                  activateAuth(signup);
                });
              };

              const errorMsg = error && 'User already exists or is there any problem.';

              return <UserForm disabled={loading} error={errorMsg} title='Sign Up' onSubmit={onSubmit} setHasAccount={setHasAccount} />;
            }
          }

        </RegisterMutation>
      )}

  </>;
};
