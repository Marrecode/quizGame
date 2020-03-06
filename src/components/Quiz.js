import React from 'react'
import Card from './Card'
import { db } from '../modules/firebase'
import { v4 as uuidv4 } from 'uuid';

class Quiz extends React.Component {
    
    state = {
        quiz: undefined
    }
    
    componentDidMount() {
        db.collection('quiz').doc(this.props.match.params.quiz_id).get().then(querySnapshot => {
            this.setState({quiz: querySnapshot.data()})
        })
    }

 render() { 
    
    const card = this.state.quiz ? this.state.quiz.questions.map(info => <Card key={uuidv4()} data={info}/>) : console.log('error')
  
     return (
    <div className="container">
      {card}
    </div>
)}
   
}

export default Quiz;