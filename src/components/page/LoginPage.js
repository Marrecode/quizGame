import React from 'react';
import { auth } from '../../modules/firebase'
import { Link } from 'react-router-dom'

class LoginPage extends React.Component {
    state = {
        email: '',
        password: '',
    }

    formOnChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    formSubmit = e => {
        e.preventDefault();

        const { email, password } = this.state;

        auth.signInWithEmailAndPassword(email, password)
        .then(credentials =>{
            console.log('auth successfull', credentials);
            this.props.history.push('/');
        })
        .catch(err => {
            console.error('auth failed', err);
        })


    }



    signUp = () => {
        this.props.history.push('/signUp/') 
        }


        render() {
            return (
            <div className="login">
                <h1>Login</h1>
            <form id="login" className="login" onSubmit={this.formSubmit} >
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control" onChange={this.formOnChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" onChange={this.formOnChange}/>
                </div>
                <div className="buttons">
                <button type="submit" className="btn btn-primary">Log in</button>
                <Link onClick={this.signUp} class="btn btn-success">Sign Up</Link>
                </div>            
                </form>
                
            </div>
        )
    }
}

export default LoginPage;