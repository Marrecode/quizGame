import React from 'react';
import { auth } from '../../modules/firebase';

class signUp extends React.Component {
    state = {
        email: '',
        createPassword: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const { email, createPassword } = this.state;
        auth.createUserWithEmailAndPassword(email, createPassword)
        .then(userRecord => {
            console.log(userRecord, 'successfull')
            this.props.history.push('/');
        })
        .catch(err => {
            console.error('fail', err);
        })
        
    }


    render() {
        return (
            <div className="login">
                <form onSubmit={this.handleSubmit} className="white">
                    <div className="form-group">
                        <label htmlFor="email"></label>
                        <input type="email" id="email" placeholder="create email" className="form-control" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="createPassword"></label>
                        <input type="password" placeholder="create password" id="createPassword" className="form-control" onChange={this.handleChange}/>
                        <button type="submit" className="btn btn-primary">Create User</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default signUp