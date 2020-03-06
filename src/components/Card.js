import React from 'react'
import Answer from './Answer'


const Card = (props) => {

    // const answers = props.data.answers.map(q => {
    //     return <div>
    //             <label className="radio-inline"><input type="radio" onChange={console.log(q)} value={q} name={q} />{q}</label>
    //         </div>
    // })

    const answers = props.data.answers.map(q => <Answer answer={q} />)

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