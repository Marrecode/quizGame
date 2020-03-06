import React from 'react'



const Card = (props) => {

    return (
        <div className="card w-100">
                <div className="card-body">
                    <h5 className="card-title">Fråga 1</h5>
                    <p className="card-text">{props.data.question}</p>
                    <div className="style-buttons">
                    </div>
                </div>
            </div>
    )
}

export default Card