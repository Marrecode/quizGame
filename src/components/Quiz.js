import React from 'react'
import Card from './Card'
import { db } from '../modules/firebase'
import { v4 as uuidv4 } from 'uuid';

class Quiz extends React.Component {
    
    state = {
        quiz: undefined,
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

    const card = this.state.quiz
    ? this.state.quiz.questions.map(info => <Card data={info} name={uuidv4()} type={info.type} key={uuidv4()}/>)
    : <h1 style={{color: '#fff'}}>Loading...</h1>
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