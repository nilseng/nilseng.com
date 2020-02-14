import React from 'react'
import { Logo } from './Logo'

export function App({ initialData }) {
  return (
    <div>
      <div className={'banner'}>
        <h1>Welcome to {initialData.appName}</h1>
        <Logo />
        <p>This is a react app made by Teodor Nilseng Danielsen.</p>
      </div>
    </div >
  );
}
