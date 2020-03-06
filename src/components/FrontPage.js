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

        console.log(quizzes)  

    }

    render() {

        const newArr = this.state.quiz.map(quiz => {
            return (
                <QuizList key={quiz.id} info={quiz} />
            )
        })
    
        return (
            <div>
                <Navbar />
    
                <div className="container d-flex w-100 justify-content-center">
                    <div className="card-group w-100 justify-content-center">
                        {newArr}
                    </div>
                    <Link to="./AddQuiz" className="btn btn-success mt-3">Create Quiz</Link>
                </div>
            </div>
        )

    }




}

export default FrontPage
