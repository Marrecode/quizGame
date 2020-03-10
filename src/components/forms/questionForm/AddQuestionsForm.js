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
            answers: [''],
            points: 0,
            type: '',
            correct: '',
            question: '' 
    }

    handleTypeSelect = (e) => {
        e.preventDefault()

        const questions = this.state.question
        questions[0].type = e.target.value

        this.setState({
            questions
        })
    }


    handleInputAnswer = (e) => {
        e.preventDefault()
        
    }

    handleForm = (e) => {
        e.preventDefault()

        db.collection("quiz").add(this.state).then(res => {
            console.log(res)
        }).catch(err => {
            console.error(err)
        })
    }

    AddQuestion = (e) => { 
       const questArr = this.state.questions.push({[e.target.id]: e.target.value})
       this.setState({questions: questArr})
    }

    handleInputTitleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    render() {

        console.log(this.state)
        console.log(this.props.match.params.id)
        return(           
        <div style={{minWidth: '100%'}}>
            
            <form onSubmit={this.handleForm} >
                <AddType type={this.state.type} onChange={this.handleTypeSelect} />
                <AddQuestions question={this.state.question} onChange={this.handleInputTitleChange}  />
                <AddAnswers answer={this.state.answers} onChange={this.handleInputAnswer}/>
                <AddCorrectAnswer correct={this.state.correct} onChange={this.handleInputTitleChange}/>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
            <div>
                <h1>Create your Quiz</h1>
                <button type="submit" className="btn btn-primary mt-3" onClick={this.handleForm}>Submit</button>
                <div className="btn-home">
                    <Link to="/" className="btn btn-danger mt-3">Home</Link>
                </div>
            </div>
        </div>
        )
    }
}
export default AddQuizForm;

