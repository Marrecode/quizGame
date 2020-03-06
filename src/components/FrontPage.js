import React, {Component} from 'react'
import { db } from '../modules/firebase'
import QuizList from './QuizList'
import AddQuiz from './AddQuiz'
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

        console.log(quizzes)  

    }

    // render() {
    //     return (
            
    //         <Display
    //         eachQuiz={this.state.quiz}
    //         />
    //     )
    // }

    render() {

        const newArr = this.state.quiz.map(quiz => {
            return (
                <QuizList key={quiz.id} info={quiz} />
            )
        })
    
        return (
            <div>
                <div className="card-group">
                    {newArr}
                
                </div>
                <Link to="./AddQuiz" className="btn btn-success mt-3">Create Quiz</Link>
            </div>
            
                // {quizArr}
                
        )

    }




}

export default FrontPage
