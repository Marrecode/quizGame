import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import QuizPage from './components/page/QuizPage'
import FrontPage from './components/page/FrontPage'
// import AddQuiz from './components/AddQuiz'
import AddQuestionsForm from './components/forms/questionForm/AddQuestionsForm'
import Navbar from './components/page/Navbar'
import AddTitle from './components/forms/AddTitle'
import AddQuiz from './components/forms/AddQuiz'



const App = () => {

  return (
    <div className="App">
		<BrowserRouter>
			<div id="App">
				<Navbar />
				<Switch>
					<Route exact path='/' component={FrontPage} />
					<Route exact path='/AddTitle' component={AddTitle} />
					<Route path='/quiz/:quiz_id' component={QuizPage} />
					{/* <Route path='/AddTitle/AddQuestionsForm' component={AddQuestionsForm} /> */}
					<Route path='/addquiz/:id' component={AddQuestionsForm} />
					<Route path='/makequiz/:id' component={AddQuiz} />
					
					{/* <Route component={NotFound} /> */}
					
				</Switch>
			</div>
		</BrowserRouter>
		
    </div>
  );
}

export default App;