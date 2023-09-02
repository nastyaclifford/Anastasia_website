import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "../styles/style.scss"

export default function Header () {
  return (
    <div>
<nav class="navbar fixed-top navbar-light">
<ul class="nav fs-1">
<li class="nav-item" className="logo">
Anastasia
  </li>
</ul>
  
<nav class="navbar justify-content-end " className="navigation">
<ul class="nav fs-3">
  <li class="nav-item">
    <a class="nav-link text-dark" href="#">About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-dark" href="#">Projects</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-dark" href="#">Contact</a>
  </li>
</ul>
</nav>
</nav>
    </div>
  )
};

