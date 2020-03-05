import React, {Component} from 'react'
import {db } from '../modules/firebase'
import Display from './Display'


class FrontPage extends Component {

        state = {
            quiz: []
        }

    componentDidMount = () => {

        const quizzes = []

        db.collection("quiz").get().then((querySnapshot) => {
            querySnapshot.forEach(doc => 
                quizzes.push(doc.data())   
            )
            this.setState({quiz: quizzes },() => console.log(quizzes))         
        })

    }

    render() {
        return (
            
            <Display
            eachQuiz={this.state.quiz}
            />
        )
    }

}

export default FrontPage
