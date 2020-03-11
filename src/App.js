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
					{
						this.state.user 
						? 
						(<h5 className='log navbar-light bg-light'>You are logged in! {this.state.user.email}</h5>)
						:
						(<h5 className='log navbar-light bg-light'>Sign in to create a quiz</h5>)
					}
					<Navbar user={this.state.user} />


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