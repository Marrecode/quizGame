import React from 'react'
import Card from './Card'
import { db } from '../modules/firebase'

const Quiz = (props) => {

    
    const card = props.info.questions.map(question => <Card questions={question} key={question.points}  />)
 
    return (
        <div className="container">
            {card}
        </div>
    )
}

export default Quiz;