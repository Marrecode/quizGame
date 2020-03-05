import React from 'react'
import Card from './Card'
import { db } from '../modules/firebase'

const Quiz = (props) => {

    console.log('props', props)
    console.log('props info', props.info)
    console.log('props params', props.match.params)

    

    const QnA = props.info.questions.map(eachQnA => eachQnA)
    // console.log(QnA)
    const A = QnA.map(ans => ans.answers)
    const Q = QnA.map(Qs => Qs.question)
    const Corr = QnA.map(n => n.correct)

    const card = props.info.questions.map(question => <Card questions={question} key={question.points} />)
 
    return (
        <div className="container">
            {card}
        </div>
    )
}

export default Quiz;