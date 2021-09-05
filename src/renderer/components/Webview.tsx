import React from 'react';

type WebviewProps = {
  readonly url: string;
};

const Webview = ({ url }: WebviewProps) => {
  return <webview src={url} style={{ width: '100%', height: '100%' }} />;
};

export default Webview;
