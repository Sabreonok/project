import React from 'react'
import './header.scss'

export default function Header() {
  return (
    <header>
        <div class="header-container flex-wrapper">
            <div class="logo-wrapper">
                <a class="logo" href="#">Layout</a>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Technologies</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
            
        </div>
    </header>
  )
}
