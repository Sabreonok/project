import React from 'react'
import './main.scss'

export default function Main() {
  return (
    <main>
    <div class="layout">
        <h1 class="main-container">Layout</h1>
        <p class="main-container">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="remember main-container">
        <h2>Lorem</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ratione corrupti doloribus officia dolores facere mollitia ipsam?</p>
    </div>
    <div class="tables main-container">
        <div class="apple">
            <img src="img/apple.png" width="75px" height ="75px" alt="html"></img>
            <h3>Apple</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ratione corrupti doloribus officia dolores facere mollitia ipsam?</p>
        </div>
        <div class="microsoft">
            <img src="img/microsoft.png" width="75px" height ="75px" alt="css"></img>
            <h3>Microsoft</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ratione corrupti doloribus officia dolores facere mollitia ipsam?</p>
        </div>
        <div class="linux">
            <img src="img/linux.svg.png" width="75px" height ="75px" alt="bootstrap"></img>
            <h3>Bookstrap</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ratione corrupti doloribus officia dolores facere mollitia ipsam?</p>
        </div>
    
    </div>
    </main>
  )
}
