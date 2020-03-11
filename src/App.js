import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import QuizPage from './components/page/QuizPage'
import FrontPage from './components/page/FrontPage'
import Navbar from './components/page/Navbar'
import LoginPage from './components/page/LoginPage'
import AddQuiz from './components/forms/AddQuiz'
import { auth } from './modules/firebase'
import signUp from './components/page/signUp'



class App extends React.Component {

	state = {
		user: null,
	}

	componentDidMount() {
		auth.onAuthStateChanged(Auth => {
			console.log('auth changed')
			if (Auth) {
				this.setState({
					user: {
						email: Auth.email,
					}
					
				})
			} else {
				this.setState({
					user: null,
				});
			}
		});
	}

  render() {
		return (
		<div className="App">
			<BrowserRouter>
				<div id="App">
					<Navbar user={this.state.user} />
					{
						this.state.user 
						? 
						(<h3 className='logIn'>You are logged in! {this.state.user.email}</h3>)
						:
						(<h3 className='logOut'>Sign in to create a quiz</h3>)
					}

					<Switch>
						<Route exact path='/' component={FrontPage} />
						<Route path='/quiz/:quiz_id' component={QuizPage} />
						<Route path='/login' component={LoginPage} />
						<Route path='/signUp' component={signUp} />
						<Route path='/makequiz/:id' render={props =>
						(
							<AddQuiz
							user={this.state.user}
							{...props}
							/>
						)
						} />
						
						
					</Switch>
				</div>
			</BrowserRouter>
			
		</div>
		);
	}
}
export default App;