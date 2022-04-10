import {
  Button,
  CascadePicker,
  DatePicker,
  Form,
  Grid,
  Input,
  NumberKeyboard,
  Radio,
  Space,
} from 'antd-mobile';
import moment from 'moment';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Category, Waterfall } from '../lib/models';
import { request } from '../lib/request';
import { APIs, CategoryType, InferAttributes, InferCreationAttributes } from '../lib/types';
import { waterfallCreator } from '../lib/utils';

type BillFormProps = {
  type: CategoryType;
  waterfall: InferAttributes<Waterfall> | null;
  meta: APIs.FEED['meta'];
};

type BillCreator = InferCreationAttributes<Waterfall> & { id?: number; kbValue?: string };
type KeyboardFor = 'outcome' | 'income';

const BillForm: React.FC<BillFormProps> = ({ type, waterfall, meta }) => {
  const [form] = Form.useForm<BillCreator>();
  const [selectedCategory, setSelectedCategory] = useState<InferAttributes<Category>[]>([]);
  const [showCtg, setShowCtg] = useState<boolean>(false);
  const [showOccur, setShowOccur] = useState<boolean>(false);
  const [showKeyboard, setShowKeyboard] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const ref = useRef();

  const keyboardFor = useMemo<KeyboardFor>(
    () => (type === CategoryType.OUTCOME ? 'outcome' : 'income'),
    [type]
  );

  const category = useMemo(() => {
    const categories: InferAttributes<Category>[] = meta.categories.filter(x => x.type === type);
    const categoryGroup: Record<string, InferAttributes<Category>[]> = categories.reduce(
      (acc, x) => {
        const arr = acc[x.name] || [];
        arr.push(x);
        acc[x.name] = arr;
        return acc;
      },
      {} as Record<string, InferAttributes<Category>[]>
    );

    return { categories, categoryGroup };
  }, [meta, type]);

  const initialValues = useMemo<BillCreator>(() => {
    const init: BillCreator = waterfallCreator(waterfall, type);

    if (!waterfall) {
      init.aid = meta.accounts[0]?.id;
      init.cid = category.categories[0]?.id;
      init.lid = meta.labels[0]?.id;
      init.income = 0;
      init.outcome = 0;
      init.occur = new Date();
      init.kbValue = '';
    } else {
      init.income = waterfall.income / 100;
      init.outcome = waterfall.outcome / 100;
      init.occur = new Date(init.occur!);
      init.kbValue = init[keyboardFor]?.toString();
    }

    return init;
  }, [waterfall, meta, type, category, keyboardFor]);

  const handleUpsert = useCallback(
    (value: BillCreator) => {
      value.outcome = (value.outcome! * 100) | 0;
      value.income = (value.income! * 100) | 0;
      delete value.kbValue;

      console.log(value);

      setLoading(true);
      request
        .post('/api/record', value)
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
      .delete('/api/record', { id: waterfall.id })
      .then(() => {
        router.push('/');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [router, waterfall]);

  const cid = form.getFieldValue('cid') || waterfall?.cid;
  const ctg = category.categories.find(x => x.id === cid);

  useEffect(() => {
    if (ctg && !category.categories.slice(0, 8).includes(ctg)) {
      setSelectedCategory([ctg]);
    }
  }, [ctg, category]);

  return (
    <>
      <Form
        form={form}
        initialValues={initialValues}
        onValuesChange={({ cid }) => {
          if (cid) {
            if (ctg && !category.categories.slice(0, 8).includes(ctg)) {
              setSelectedCategory([ctg]);
            }
          }
        }}
        onFinish={handleUpsert}
      >
        <Form.Item name="id" hidden>
          <Input />
        </Form.Item>
        <Form.Item name="type" hidden>
          <Input />
        </Form.Item>
        <Form.Item name="outcome" hidden>
          <Input />
        </Form.Item>
        <Form.Item name="income" hidden>
          <Input />
        </Form.Item>
        <Form.Item
          label="金额"
          name="kbValue"
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
        <Form.Item
          label={
            <span>
              类型
              <a
                className="smallFont"
                onClick={() => {
                  setShowCtg(true);
                }}
                style={{ marginLeft: 10 }}
              >
                全部
              </a>
            </span>
          }
          name="cid"
        >
          <Radio.Group>
            <Grid columns={3} gap={4}>
              {selectedCategory.concat(category.categories.slice(0, 8)).map(x => (
                <Grid.Item key={x.id}>
                  <Radio value={x.id}>{x.subName || x.name}</Radio>
                </Grid.Item>
              ))}
            </Grid>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="账户" name="aid">
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
      {ctg && (
        <CascadePicker
          visible={showCtg}
          value={[ctg.name, ctg.id.toString()]}
          options={Object.keys(category.categoryGroup).map(name => ({
            label: name,
            value: name,
            children: category.categoryGroup[name].map(x => ({
              label: x.subName,
              value: x.id.toString(),
            })),
          }))}
          onConfirm={value => {
            setShowCtg(false);
            form.setFieldsValue({ cid: +(value[1] || 0) });
          }}
          onCancel={() => {
            setShowCtg(false);
          }}
          style={{ height: '60vh' }}
        />
      )}
      <NumberKeyboard
        visible={showKeyboard}
        customKey="."
        confirmText="OK"
        onInput={value => {
          const kbValue = form.getFieldValue('kbValue') || '';
          form.setFieldsValue({ kbValue: kbValue + value });
        }}
        onDelete={() => {
          const kbValue = form.getFieldValue('kbValue') || '';
          form.setFieldsValue({ kbValue: kbValue.substring(0, kbValue.length - 1) });
        }}
        onClose={() => setShowKeyboard(false)}
        afterClose={() => {
          const kbValue = form.getFieldValue('kbValue') || '';
          form.setFieldsValue({ [keyboardFor]: +kbValue });
        }}
        onConfirm={() => {
          const kbValue = form.getFieldValue('kbValue') || '';
          form.setFieldsValue({ [keyboardFor]: +kbValue });
          form.submit();
        }}
      />
    </>
  );
};

export default BillForm;
