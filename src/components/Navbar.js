import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
            <div className="container">
            <Link to="/" className="navbar-brand">The Awesome Quizzes</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Quizzes <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                    </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navbar



