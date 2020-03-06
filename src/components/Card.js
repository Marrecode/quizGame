import React from 'react'


const Card = (props) => {


    const answers = this.props.anwers.map(a => <Answer answer={a}/>)

    return (
        <div className="card w-100">
                <div className="card-body">
                    <h5 className="card-title">Fråga 1</h5>
                    <p className="card-text">{props.questions.question}</p>
                    <div className="style-buttons">

                    {answers}
                    
                    </div>
                </div>
            </div>
    )
}

export default Card