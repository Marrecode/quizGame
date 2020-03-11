import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import QuizPage from './components/page/QuizPage'
import FrontPage from './components/page/FrontPage'
// import AddQuiz from './components/AddQuiz'
import AddQuestionsForm from './components/forms/questionForm/AddQuestionsForm'
import Navbar from './components/page/Navbar'
import LoginPage from './components/page/LoginPage'
import AddTitle from './components/forms/AddTitle'
import AddQuiz from './components/forms/AddQuiz'
import { auth } from './modules/firebase'



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
						(<h3>you are logged in {this.state.user.email}</h3>)
						:
						(<h3>ure logged out</h3>)
					}

					<Switch>
						<Route exact path='/' component={FrontPage} />
						<Route exact path='/forms/AddTitle' component={AddTitle} />
						<Route path='/quiz/:quiz_id' component={QuizPage} />
						<Route path='/login' component={LoginPage} />
						{/* <Route path='/AddTitle/AddQuestionsForm' component={AddQuestionsForm} /> */}
						<Route path='/addquiz/:id' component={AddQuestionsForm} />
						<Route path='/makequiz/:id' render={props =>
						(
							<AddQuiz
							user={this.state.user}
							{...props}
							/>
						)
						} />
						
						{/* <Route component={NotFound} /> */}
						
					</Switch>
				</div>
			</BrowserRouter>
			
		</div>
		);
	}
}
export default App;