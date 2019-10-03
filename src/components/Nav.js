import React, { Component } from 'react'
import '../App.css';
import { Link } from 'react-router-dom';


export class Nav extends Component {
    render() {
        const navLinkStyle = {
            color: 'white',
            textDecoration: 'none'
        }
        return (
            <nav>
                <h1>Nav</h1>
                <ul className="nav-links">
                    <Link style={navLinkStyle} to="/about"><li>About</li></Link>
                    <Link style={navLinkStyle} to="/shop"><li>Shop</li></Link>
                </ul>
            </nav>
        )
    }
}

export default Nav
