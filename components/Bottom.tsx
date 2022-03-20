import { TabBar } from 'antd-mobile';
import { AppOutline, MessageOutline, UnorderedListOutline } from 'antd-mobile-icons';
import { useRouter } from 'next/router';

const Bottom: React.FC = () => {
  const router = useRouter();

  const tabs = [
    {
      key: '/',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/list',
      title: '明细',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/account',
      title: '账户',
      icon: <MessageOutline />,
    },
  ];

  return (
    <TabBar activeKey={router.pathname} onChange={value => router.push(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
};

export default Bottom;
