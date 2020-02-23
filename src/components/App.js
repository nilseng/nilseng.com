import React, { useEffect, useState } from 'react'
import { Logo } from './Logo'

function useWindowHeight() {
  const [height, setHeight] = useState(0)
  useEffect(() => {
    function updateHeight() {
      setHeight(window.innerHeight)
    }
    window.addEventListener('resize', updateHeight)
    updateHeight()
    return () => window.removeEventListener('resize', updateHeight)
  }, [])
  return height
}

export function App() {
  const height = useWindowHeight()
  const rotate = false
  return (
    <div>
      <div className={'banner'} style={{ minHeight: height }}>
        <Logo />
        <p>by Teodor Nilseng Danielsen</p>
      </div>
    </div >
  );
}
