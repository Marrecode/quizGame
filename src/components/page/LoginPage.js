import React from 'react';
import { auth } from '../../modules/firebase'

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

        render() {
            return (
            <div id="login">
                <h1>Login</h1>
            <form id="login-form" onSubmit={this.formSubmit} >
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control" onChange={this.formOnChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" onChange={this.formOnChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Log in</button>
                </form>
            </div>
        )
    }
}

export default LoginPage;