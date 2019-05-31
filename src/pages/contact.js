import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
    <div>
        <Header headerText="Contact Me" />
        <p>Email: darrell (at) nokecodes (dot) org</p>
        <p><img src="https://source.unsplash.com/random/400x200" alt="" /></p>
        <p><Link to="/">Home</Link></p>
    </div>
  )
