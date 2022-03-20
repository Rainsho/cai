import { Button, Form, Input } from 'antd-mobile';
import { NextPage } from 'next';
import React, { useCallback, useState } from 'react';
import { request } from '../lib/request';

const Auth: NextPage = () => {
  const [loading, setLoading] = useState(false);

  const handleAuth = useCallback(async ({ code }) => {
    setLoading(true);
    request.post('/api/auth', { code }).finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <Form layout="horizontal" mode="card" onFinish={handleAuth} style={{ marginTop: '30vh' }}>
      <Form.Item
        name="code"
        label="Code"
        rules={[{ required: true, message: 'Auth Code Please!' }]}
      >
        <Input type="password" placeholder="Enter auth code" clearable />
      </Form.Item>
      <Form.Item>
        <Button block type="submit" color="primary" loading={loading}>
          Auth
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Auth;
