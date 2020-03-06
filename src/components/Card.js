import React from 'react'
import Answer from './Answer'


const Card = (props) => {


    // console.log('data', props.data.answers)
    const answers = props.data.answers.map(a => <Answer answer={a}/>)

    return (
        <div className="card w-100">
                <div className="card-body">
                    <h5 className="card-title">Fråga 1</h5>
                    <p className="card-text">{props.data.question}</p>
                    <div>
                        {answers}
                    </div>
                </div>
            </div>
    )
}

export default Card