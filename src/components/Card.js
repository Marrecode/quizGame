import React from 'react'
import Answer from './Answer'
import MultiAnswer from './MultiAnswer'
import { v4 as uuidv4 } from 'uuid';



const Card = (props) => {

    const type = props.data.type

    const answers = (type === 'single')
    ?
     props.data.answers.map(q => <Answer correct={props.data.correct} answer={q} name={props.name} key={uuidv4()} />)
    : props.data.answers.map(q => <MultiAnswer correct={props.data.correct} answer={q} name={props.name} key={uuidv4()} />)

    return (
        <div className="card w-100">
                <div className="card-body">
                    <h5 className="card-title">Fråga 1</h5>
                    <p className="card-text">{props.data.question}</p>
                    <div style={{
                        textAlign: 'left',
                        display:'flex',
                        marginLeft: '40%',
                        justifyContent: 'center',
                        flexDirection: 'column', 
                        alignItems:'justify'}}>
                        {answers}
                    </div>
                </div>
            </div>
    )
}

export default Card