import React from 'react';
import Question from './Question'

const Quiz = (props) => {

    console.log(props.quiz)

    const array = props.quiz.questions.map(q => <Question questions={q} />)

// For props av front page
    //Titel
    //Questions
    //Answers
    //Correct answer?

    return (
        <div className="container">
            <h1>{props.quiz.title}</h1>

                {/* <Question quiz={props.quiz} />   */}
                {array}
            
        </div>
    )
}

export default Quiz;