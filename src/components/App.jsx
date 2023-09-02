import React from "react"
import Header from "../pages/Header"
import Home from "../pages/Home"
import "../styles/style.scss"

export default function App () {
  return (
    <div className="container">
      <header><Header/></header>
      <main className="main"><Home/></main>
      <footer></footer>
    </div>
  )
};


