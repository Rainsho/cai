import { Button, DatePicker, Form, Grid, Input, NumberKeyboard, Radio, Space } from 'antd-mobile';
import moment from 'moment';
import { useRouter } from 'next/router';
import React, { useCallback, useMemo, useState } from 'react';
import type { Waterfall } from '../lib/models';
import { request } from '../lib/request';
import {
  APIs,
  CategoryType,
  InferAttributes,
  InferCreationAttributes,
  TransferHelper,
} from '../lib/types';

type BillFormProps = {
  type: CategoryType;
  waterfall: InferAttributes<Waterfall> | null;
  meta: APIs.FEED['meta'];
};

type BillCreator = InferCreationAttributes<Waterfall> &
  TransferHelper & {
    id?: number;
  };
type KeyboardFor = 'outcome' | 'income';

const TransferForm: React.FC<BillFormProps> = ({ type, waterfall, meta }) => {
  const [form] = Form.useForm<BillCreator>();
  const [showOccur, setShowOccur] = useState<boolean>(false);
  const [showKeyboard, setShowKeyboard] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const keyboardFor = useMemo<KeyboardFor>(
    () => (type === CategoryType.TRANSFER_OUT ? 'outcome' : 'income'),
    [type]
  );

  const initialValues = useMemo<Partial<BillCreator>>(() => {
    const init: Partial<BillCreator> = { type };

    if (!waterfall) {
      init.aid_out = meta.accounts[0]?.id;
      init.aid_in = meta.accounts[0]?.id;
      init.lid = meta.labels[0]?.id;
      init.occur = new Date();
      init.amount = '';
    } else {
      init.id = waterfall.id;
      init.aid = waterfall.aid;
      init.lid = waterfall.lid;
      init.amount = (waterfall[keyboardFor] / 100).toString();
      init.occur = new Date(waterfall.occur!);
      init.ps = waterfall.ps;
    }

    return init;
  }, [waterfall, meta, type, keyboardFor]);

  const handleUpsert = useCallback(
    (value: BillCreator) => {
      setLoading(true);
      request
        .post('/api/record/transfer', value)
        .then(() => {
          router.push('/');
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [router]
  );

  const handleDelete = useCallback(() => {
    if (!waterfall) return;

    setLoading(true);
    request
      .delete('/api/record/transfer', { id: waterfall.id })
      .then(() => {
        router.push('/');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [router, waterfall]);

  return (
    <>
      <Form form={form} initialValues={initialValues} onFinish={handleUpsert}>
        <Form.Item name="id" hidden>
          <Input />
        </Form.Item>
        <Form.Item name="type" hidden>
          <Input />
        </Form.Item>
        <Form.Item
          label="金额"
          name="amount"
          layout="horizontal"
          onClick={() => setShowKeyboard(true)}
        >
          <Input type="text" readOnly />
        </Form.Item>
        <Form.Item label="时间" name="occur" layout="horizontal">
          <Space align="center">
            <Button
              size="small"
              onClick={() => {
                setShowOccur(true);
              }}
            >
              选择时间
            </Button>
            <DatePicker
              visible={showOccur}
              precision="minute"
              value={form.getFieldValue('occur')}
              onClose={() => setShowOccur(false)}
              onConfirm={value => {
                setShowOccur(false);
                form.setFieldsValue({ occur: value });
              }}
            >
              {value => moment(value ? value : initialValues.occur).format('YYYY-MM-DD HH:mm')}
            </DatePicker>
          </Space>
        </Form.Item>
        {!waterfall ? (
          <>
            <Form.Item label="转出账户" name="aid_out">
              <Radio.Group>
                <Grid columns={2} gap={4}>
                  {meta.accounts
                    .filter(x => x.show)
                    .map(x => (
                      <Grid.Item key={x.id}>
                        <Radio value={x.id}>{x.name}</Radio>
                      </Grid.Item>
                    ))}
                </Grid>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="转入账户" name="aid_in">
              <Radio.Group>
                <Grid columns={2} gap={4}>
                  {meta.accounts
                    .filter(x => x.show)
                    .map(x => (
                      <Grid.Item key={x.id}>
                        <Radio value={x.id}>{x.name}</Radio>
                      </Grid.Item>
                    ))}
                </Grid>
              </Radio.Group>
            </Form.Item>
          </>
        ) : (
          <Form.Item
            label={type === CategoryType.TRANSFER_OUT ? '转出账户' : '转入账户'}
            name="aid"
          >
            <Radio.Group>
              <Grid columns={2} gap={4}>
                {meta.accounts
                  .filter(x => x.show)
                  .map(x => (
                    <Grid.Item key={x.id}>
                      <Radio value={x.id}>{x.name}</Radio>
                    </Grid.Item>
                  ))}
              </Grid>
            </Radio.Group>
          </Form.Item>
        )}
        <Form.Item label="标签" name="lid" layout="horizontal">
          <Radio.Group>
            <Grid columns={3} gap={4}>
              {meta.labels.map(x => (
                <Grid.Item key={x.id}>
                  <Radio value={x.id}>{x.name}</Radio>
                </Grid.Item>
              ))}
            </Grid>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="备注" name="ps" layout="horizontal">
          <Input />
        </Form.Item>
        <Form.Item>
          <Grid columns={2} gap={4}>
            <Grid.Item>
              <Button block color="primary" type="submit" loading={loading}>
                保存
              </Button>
            </Grid.Item>
            <Grid.Item>
              <Button block color="danger" type="button" loading={loading} onClick={handleDelete}>
                删除
              </Button>
            </Grid.Item>
          </Grid>
        </Form.Item>
      </Form>
      <NumberKeyboard
        visible={showKeyboard}
        customKey="."
        confirmText="OK"
        onInput={value => {
          const amount = form.getFieldValue('amount') || '';
          form.setFieldsValue({ amount: amount + value });
        }}
        onDelete={() => {
          const amount = form.getFieldValue('amount') || '';
          form.setFieldsValue({ amount: amount.substring(0, amount.length - 1) });
        }}
        onClose={() => setShowKeyboard(false)}
        // afterClose={() => {
        //   const kbValue = form.getFieldValue('kbValue') || '';
        //   form.setFieldsValue({ [keyboardFor]: +kbValue });
        // }}
        onConfirm={() => {
          // const kbValue = form.getFieldValue('kbValue') || '';
          // form.setFieldsValue({ [keyboardFor]: +kbValue });
          form.submit();
        }}
      />
    </>
  );
};

export default TransferForm;
