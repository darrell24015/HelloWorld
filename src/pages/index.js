import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import logo from "../../static/undraw_clean_up.svg"

export default () => (
    <div>
        <Header headerText="Well, Hello world!" />
        <h3>This is Gatsby!</h3>
        <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
        <p>Are we having fun yet?</p>
        <p><img src={logo} width="220" /></p>
        <p><Link to="/contact/"><button>Contact</button></Link></p>
    </div>
) 
