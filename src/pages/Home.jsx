import React from 'react'
import '../styles/Home.css'
import Slides from '../components/Slides'
export default function Home() {
  return (
    <main>
      <div className="wrapper-slogan">
        <h1 className="wrapper-slogan__title">Desarrollador  <br />backend</h1>
      </div>
      <Slides/>
    </main>
  )
}
