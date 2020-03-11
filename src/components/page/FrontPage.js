import React, {Component} from 'react'
import { db } from '../../modules/firebase'
import QuizList from './QuizList'
import { Link } from 'react-router-dom'


class FrontPage extends Component {

        state = {
            quiz: []
        }

    componentDidMount = () => {

        const quizzes = []

        db.collection("quiz").get().then((querySnapshot) => {
            querySnapshot.forEach(doc => 
                quizzes.push({
                    id: doc.id,
                    title: doc.data().title,
                    description: doc.data().description
                })   
            )
            this.setState({quiz: quizzes})   
        })
    }


    makeNewQuiz = () => {

        db.collection("quiz").add({
            title: '',
            questions: [],
            description: ''
        })
            .then(doc => {
                this.props.history.push('/makequiz/' + doc.id)   
            })
            .catch(err => {
                console.error(err)
            })
    }

    render() {
        const newArr = this.state.quiz.map(quiz => {
            const ql = quiz.title ? <QuizList key={quiz.id} info={quiz} /> : null
            return (
               ql
            )
        })
    
        return (
            <div>    
                <div className="container">
                    <div className="card-group d-flex flex-column flex-md-row">
                        {newArr}
                    {/* <Link to={'/AddQuizForm'} className="btn btn-success mt-md-3 mx-2 w-100">Create Quiz</Link> */}
                    </div>
                    {/* <Link to={'./AddTitle'} className="btn btn-success mt-3 w-100">Create Quiz</Link> */}
                    <Link onClick={this.makeNewQuiz} to={'/makequiz/'} className="btn btn-success mt-3 w-100">Create Quiz</Link>
                </div>

            </div>
        )
    }
}

export default FrontPage
