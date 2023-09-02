import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import banner from "../img/banner.png"
import "../styles/style.scss"

export default function Home () {
  return (
    <div className="home__container">
      <img src={banner} alt="Banner" className="banner"/>
      <div className="home__text">
      <h1 className="home__text-title">HI! I AM ANASTASIA CLIFFORD</h1>
      <h2 className="home__text-info">I am a Front-end developer</h2>
      <h2 className="home__text-info info_below">Welcome to my website!</h2>
      </div>
    </div>
  )
};

