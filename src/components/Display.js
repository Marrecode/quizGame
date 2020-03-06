import React from 'react'
import Quiz from './Quiz'

const Display  = (props) => {

    const quizArr = props.eachQuiz.map(quiz => <Quiz info={quiz}/> )

    return (
        <div>
           {quizArr}
        </div>
    )
}

export default Display