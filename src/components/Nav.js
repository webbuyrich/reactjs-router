import React, { Component } from 'react'

export class Nav extends Component {
    render() {
        return (
            <nav>
                <h1>Nav</h1>
                <ul className="nav-links">
                    <li>About</li>
                    <li>Shop</li>
                </ul>
            </nav>
        )
    }
}

export default Nav
