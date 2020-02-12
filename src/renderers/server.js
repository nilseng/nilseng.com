import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { App } from '../components/App';

export async function serverRenderer() {
  const initialData = {
    appName: 'nilseng.com',
  };

  const pageData = {
    title: `Welcome to ${initialData.appName}`,
  };

  return Promise.resolve({
    initialData,
    initialMarkup: ReactDOMServer.renderToString(
      <App initialData={initialData} />
    ),
    pageData,
  });
}
