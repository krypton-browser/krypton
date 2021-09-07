import React from 'react';
import Layout from '../components/Layout';
import Default from '../components/Default';
import { useAppSelector } from '../configureStore';
import Webview from '../components/Webview';

const Home: React.FC = () => {
  const { tabs } = useAppSelector((state) => state.browsing);
  return (
    <Layout>
      {tabs.map(({ id, stack, point }) =>
        stack[point] === '' ? (
          <Default key={id} id={id} />
        ) : (
          <Webview key={id} id={id} url={stack[point]} />
        )
      )}
    </Layout>
  );
};

export default Home;
