import React from 'react'
import Card from './Card'
import { db } from '../modules/firebase'
import { v4 as uuidv4 } from 'uuid';

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
        }, 0);

        console.log(sumPoints)
        this.setState({
            sumPoints: sumPoints
        })
    }

    handlePoints = (points, index) => {
        let array = this.state.points;
        array[index] = points;

        this.setState({
            points: array
        })
    }

 render() { 

    console.log(this.state.points)
    let i = 0
    const card = this.state.quiz ? this.state.quiz.questions.map(info => <Card key={i++} onChange={this.handlePoints} name={i++} data={info}/>) : ''
     return (
    <div className="container">
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                {card}
                <button className="btn btn-success" type="submit">Send Answers</button>
            </div>
        </form>
        <div>
            {this.state.sumPoints
                ? (<p>You have {this.state.sumPoints} points!</p>)
                : ''
            }
        </div>
    </div>
)}
   
}

export default QuizPage