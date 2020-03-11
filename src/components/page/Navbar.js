import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { auth } from '../../modules/firebase'

const Navbar = (props) => {

    const handleSignOut = e => {
        e.preventDefault();

        console.log('want to sign out')
        auth.signOut()
        .then(() => {
            console.log('signed out')
        })
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
            <div className="container">
            <Link to="/" className="navbar-brand">The Awesome Quizzes</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                    
                {
                    props.user
                    ? (
                    <li className="nav-item">
                        <a href="/logout" className="nav-link"
                        onClick={ handleSignOut }>Logout</a>
                        
                    </li>
                    )
                    : (
                        <li className="nav-item">
                        <NavLink to="/login" className="nav-link">Login</NavLink>
                    </li>
                    )
                }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar



