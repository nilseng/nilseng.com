import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { App } from '../components/App';

export async function serverRenderer() {
  const initialData = {
    appName: 'nilseng.com',
  };

  return Promise.resolve({
    initialData,
    initialMarkup: ReactDOMServer.renderToString(
      <App initialData={initialData} />
    ),
  });
}
