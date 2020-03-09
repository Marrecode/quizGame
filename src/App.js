import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import QuizPage from './components/QuizPage'
import FrontPage from './components/FrontPage'
import AddQuiz from './components/AddQuiz'
import AddQuizForm from './components/form/AddQuizForm'
import Navbar from './components/Navbar'


const App = () => {

  return (
    <div className="App">
		<BrowserRouter>
			<div id="App">
				<Navbar />
				<Switch>
					<Route exact path='/' component={FrontPage} />
					<Route exact path='/AddQuizForm' component={AddQuizForm} />
					<Route path='/quiz/:quiz_id' component={QuizPage} />
					
					{/* <Route component={NotFound} /> */}
					
				</Switch>
			</div>
		</BrowserRouter>
		
    </div>
  );
}

export default App;