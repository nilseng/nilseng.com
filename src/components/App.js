import React from 'react';

export function App({ initialData }) {
  return (
    <div>
      <div className={'banner'}>
        <h1>Welcome to {initialData.appName}</h1>
        <p>This is a react app made by Teodor Nilseng Danielsen.</p>
      </div>
    </div>
  );
}
