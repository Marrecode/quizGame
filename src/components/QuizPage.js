import React from 'react'
import Card from './Card'
import { db } from '../modules/firebase'
// import { v4 as uuidv4 } from 'uuid';

class QuizPage extends React.Component {
    
    state = {
        quiz: null,
        points: []
    }
    
    componentDidMount() {
        db.collection('quiz').doc(this.props.match.params.quiz_id).get().then(querySnapshot => {
            this.setState({quiz: querySnapshot.data()})
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        let sumPoints = this.state.points.reduce((sum, points) =>{
            if(!sum) {
                sum = 0
            }
            return sum + points
        }, 0)
        this.setState({
            sumPoints: sumPoints
        })
    }

    handlePoints = (points, index) => {
        let array = this.state.points
        array[index] = points

        this.setState({
            points: array
        })
    }

    getHowManyPointsTotal = () => {
        return this.state.quiz.questions.reduce((sum, question) => {
            return sum + question.points
        }, 0)
    }

 render() { 

    let i = 0
    const card = this.state.quiz
    ? this.state.quiz.questions.map(info => <Card onChange={this.handlePoints} data={info} name={i++} type={info.type} key={i++}/>)
    : <h1 style={{color: '#fff'}}>Loading...</h1>
     return (
    <div className="container">
        <form onSubmit={this.handleSubmit}>
            <h1>{this.state.quiz
                    ? (this.state.quiz.title)
                    : ''
                    }
            </h1>
            <div className="form-group">
                {card}

                {this.state.sumPoints >= 0
                    ? (<p className="text-white">You have {this.state.sumPoints} points out of {this.getHowManyPointsTotal()}!</p>)
                    : ''
                }

                <button className="btn btn-success" type="submit">Send Answers</button>
            </div>
        </form>
    </div>
)}
   
}

export default QuizPage