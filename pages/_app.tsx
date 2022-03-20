import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import { useStore } from '../hooks/useStore';
import Bottom from '../components/Bottom';
import styles from '../styles/App.module.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    useStore.getState().fetchFeed();
    console.log('render app');
  }, []);

  return (
    <div className={styles.app}>
      <Head>
        <title>Cai</title>
        <meta name="description" content="WaCai 记账 Web 版" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Component {...pageProps} />
      </main>

      <div className={styles.bottom}>
        <Bottom />
      </div>
    </div>
  );
}

export default MyApp;
