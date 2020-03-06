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
    
    componentDidUpdate() {
        console.log(this.state.quiz)
    }

 render() { 

   const card = this.state.quiz ? this.state.quiz.questions.map(info => <Card data={info}/>) : console.log('error')

     return (
    <div className="container">
      {card}
    </div>
)}
   
}

export default Quiz;