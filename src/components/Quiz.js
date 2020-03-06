import React from 'react'
import Card from './Card'
import { db } from '../modules/firebase'

class Quiz extends React.Component {
    
    state = {
        quiz: null,
        points: null
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

    handleCardChange = (points, points2) => {
        if(points !== 0) {
            this.setState({
                points: this.state.points + points
            })
        } else {
            this.setState({
                points: this.state.points - this.state.points
            })
        }
    }

 render() { 

    console.log(this.state.points)
    let i = 0
    const card = this.state.quiz ? this.state.quiz.questions.map(info => <Card key={i++} onChange={this.handleCardChange} name={i++} data={info}/>) : ''
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