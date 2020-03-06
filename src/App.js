import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import AddQuiz from './components/AddQuiz';
import Quiz from './components/Quiz';
import FrontPage from './components/FrontPage';


const App = () => {

  return (
    <div className="App">
		<BrowserRouter>
			<div id="App">
				<Switch>
					<Route exact path='/' component={FrontPage} />
					<Route exact path='/AddQuiz' component={AddQuiz} />
					<Route path='/quiz/:quiz_id' component={Quiz} />
					
					{/* <Route component={NotFound} /> */}
					
				</Switch>
			</div>
		</BrowserRouter>
		
    </div>
  );
}

export default App;