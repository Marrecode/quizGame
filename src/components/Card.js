import React from 'react'


const Card = (props) => {


    return (
        <div className="card w-100">
                <div className="card-body">
                    <h5 className="card-title">Fråga 1</h5>
                    <p className="card-text">{props.questions.question}</p>
                    <div className="style-buttons">
                        <button type="button" className="btn btn-primary">Svar 1</button>
                        <button type="button" className="btn btn-primary">Svar 2</button>
                        <button type="button" className="btn btn-primary">Svar 3</button>
                        <button type="button" className="btn btn-primary">Svar 4</button>
                    </div>
                </div>
            </div>
    )
}

export default Card