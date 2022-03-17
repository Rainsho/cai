import { NextPage } from 'next';
import React from 'react';

const Auth: NextPage = () => {
  return (
    <div>
      <form action="/api/auth" method="post">
        <label htmlFor="code">code</label>
        <input type="password" name="code" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Auth;
