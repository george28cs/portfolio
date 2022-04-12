import React from 'react'
import '../styles/Home.css'
import Slides from '../components/Slides'
import MoreInfo from '../components/MoreInfo'
export default function Home() {
  return (
    <main>
      <div className="wrapper-slogan">
        <h1 className="wrapper-slogan__title">Desarrollador  <br />backend</h1>
      </div>
      <Slides/>
      <MoreInfo/>
    </main>
  )
}
