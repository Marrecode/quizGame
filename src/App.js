import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import QuizPage from './components/page/QuizPage'
import FrontPage from './components/page/FrontPage'
import AddTitle from './components/forms/AddTitle'
import Navbar from './components/page/Navbar'




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
					
					{/* <Route component={NotFound} /> */}
					
				</Switch>
			</div>
		</BrowserRouter>
		
    </div>
  );
}

export default App;