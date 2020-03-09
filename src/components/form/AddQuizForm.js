import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom'
import { db } from '../../modules/firebase'
import AddQuestions from './form-components/AddQuestions'
import AddAnswers from './form-components/AddAnswers'
import AddTitle from './form-components/AddTitle'
import AddCorrectAnswer from './form-components/AddCorrectAnswer'
import AddType from './form-components/AddType'

export class AddQuizForm extends Component {
    state = {
        title: undefined,
        questions: [
            {
                answers: undefined,
                points: undefined,
                type: undefined,
                correct: undefined,
                question: undefined
            }
            
        ],
        description: undefined
    }

    handleForm = (e) => {
        e.preventDefault();

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
        return(           
        <>
            <h1>Create your Quiz</h1>
            <div className="btn-home">
                <Link to="/" className="btn btn-danger mt-3">Home</Link>
            </div>
            
            <form onSubmit={this.handleForm}>
                <AddTitle title={this.state.title} onChange={this.handleInputTitleChange}/>
                <AddType type={this.state.type} onChange={this.handleInputTitleChange} />
                <AddQuestions question={this.state.questions} onChange={this.handleInputTitleChange} />
                <AddAnswers answer={this.state.answers} onChange={this.handleInputTitleChange}/>
                <AddCorrectAnswer correct={this.state.correct} onChange={this.handleInputTitleChange}/>
            </form>
            <div>
                <h1>Create your Quiz</h1>
                <div className="btn-home">
                    <Link to="/" className="btn btn-danger mt-3">Home</Link>
                </div>
            </div>
        </>
        )
    }
}
export default AddQuizForm;


