import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
        <nav class="navbar">
  <a href="/" class="logo">Logo</a>
  <div class="nav-links">
    <ul class="nav-menu">
      <li class="active"><a href="/">Home</a></li>
      <li><a href="/">About Us</a></li>
      <li><a href="/">Services</a></li>
      <li><a href="/">Careers</a></li>
      <li><a href="/">Contact</a></li>
    </ul>
  </div>
    <i class='bx bx-grid-alt menu-hamburger'></i>

</nav>
<header class="header"></header>
    </div>
  )
}

export default Header