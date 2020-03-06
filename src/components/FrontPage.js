import React, {Component} from 'react'
import { db } from '../modules/firebase'
import QuizList from './QuizList'
import AddQuiz from './AddQuiz'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'


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

    render() {

        const newArr = this.state.quiz.map(quiz => {
            return (
                <QuizList key={quiz.id} info={quiz} />
            )
        })
    
        return (
            <div>    
                <div className="container">
                    <div className="card-group">
                        {newArr}
                    </div>
                    <Link to="./AddQuiz" className="btn btn-success mt-3">Create Quiz</Link>
                </div>
            </div>
        )
    }
}

export default FrontPage
