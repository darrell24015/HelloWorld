import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
    <div style={{ color: "purple"}}>
    <Header headerText="Well, Hello world!" />
    <h3>This is Gatsby!</h3>
    <p>Are we having fun yet?</p>
    <p><img src="https://source.unsplash.com/random/400x200" alt="" /></p>
    <p><Link to="/contact/">Contact</Link></p>
</div>
) 
