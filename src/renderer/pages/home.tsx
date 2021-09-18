import React from 'react';
import Layout from '../components/Layout';
import { useAppSelector } from '../configureStore';
import Webview from '../components/Webview';

const Home: React.FC = () => {
  const { webviewTable } = useAppSelector((state) => state.browsing);
  return (
    <Layout>
      {Object.entries(webviewTable).map(([id, url]) => (
        <Webview key={id} id={id} url={url} />
      ))}
    </Layout>
  );
};

export default Home;
