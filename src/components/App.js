import React from 'react'
import { Logo } from './Logo'

export function App({ initialData }) {
  return (
    <div>
      <div className={'banner'}>
        <h1>{initialData.appName}</h1>
        <Logo />
        <p>by Teodor Nilseng Danielsen</p>
      </div>
    </div >
  );
}
