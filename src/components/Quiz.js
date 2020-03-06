import React from 'react'
import Card from './Card'
import { db } from '../modules/firebase'

class Quiz extends React.Component {
    
    state = {
        quiz: null
    }
    
    componentDidMount() {
        db.collection('quiz').doc(this.props.match.params.quiz_id).get().then(querySnapshot => {
            this.setState({quiz: querySnapshot.data()})
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitting')
        console.log('e', e.target)

    }

 render() { 

   const card = this.state.quiz ? this.state.quiz.questions.map(info => <Card data={info}/>) : ''
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