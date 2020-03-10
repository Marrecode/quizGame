import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom'
import { db } from '../../../modules/firebase'
import AddQuestions from './questionFormComponents/AddQuestions'
import AddAnswers from './questionFormComponents/AddAnswers'
import AddTitle from '../AddTitle'
import AddCorrectAnswer from './questionFormComponents/AddCorrectAnswer'
import AddType from './questionFormComponents/AddType'

class AddQuizForm extends Component {
    state = {
      
    }

    handleTypeSelect = (e) => {
        e.preventDefault()

        const questions = this.state.question
        questions[0].type = e.target.value

        this.setState({
            questions
        })

        console.log(questions)
    }

    componentDidMount() {
		console.log('AddQuestionsForm.componentDidMount()');

		db.collection('quiz').doc(this.props.match.params.id).get()
		.then(doc => {
			// do stuff with document
            console.log("Got response from Firestore", this.props.match.params.id
            , doc.data());
			this.setState(
                     {   
                        ...doc.data(),         
                    }
                )
            console.log("question is updated");
            console.log('state is', this.state)

		}).catch(err => {
			console.error(err);
		});
    }


    addAnswer = (e) => { 
        const questions = this.state.questions
        const ans = questions[0].answers.push(e.target.value)

        this.setState({
            ans
        })
    }


    addQuestion = (e) => {
        const questions = this.state.questions
       
    }

    addCorrect = (e) => {

    }


    handleForm = (e) => {
        e.preventDefault()
        db.collection("quiz").doc(this.props.match.params.id).set(this.state);
    }

 
    render() {
        return(           
        <div style={{minWidth: '100%'}}>
            
            <form onSubmit={this.handleForm} >
                <AddType 
                type={this.state.type} 
                onChange={this.handleTypeSelect} />

                <AddQuestions 
                question={this.state.question} 
                onChange={this.AddQuestion}  />

                <AddAnswers 
                answer={this.state.answers} 
                onChange={this.handleInputTitleChange} 
                onClick={this.addAnswer}/>

                <AddCorrectAnswer 
                correct={this.state.correct} 
                onChange={this.handleInputTitleChange}/>

                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
            <div className='quizPrev' style={{width: '300px', height: '300px'}}>
                <h1>{this.state.title}</h1>
            </div>
        </div>
        )
    }
}
export default AddQuizForm;


