import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import logo from "../../static/photo.jpg"

export default () => (
    <div>
        <Header headerText="Contact Me" />
        <p>Email: darrell (at) nokecodes (dot) org</p>
        <p><img src={logo} alt="Random Photo" /></p>
        <p><Link to="/"><button>Home</button></Link></p>
    </div>
  )
