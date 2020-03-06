import React from 'react'
import Card from './Card'
import { db } from '../modules/firebase'

class Quiz extends React.Component {
    
    state = {
        quiz: null,
        points: 0
    }
    
    componentDidMount() {
        db.collection('quiz').doc(this.props.match.params.quiz_id).get().then(querySnapshot => {
            this.setState({quiz: querySnapshot.data()})
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // SHOW HOW MANY POINTS
    }

    handlePoints = (points, points2) => {
        if(points !== 0) {
            this.setState({
                points: this.state.points + points
            })
        } else {
            if(this.state.points !== 0) {
                this.setState({
                    points: this.state.points - points2
                })
            }
        }
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
    </div>
)}
   
}

export default Quiz;