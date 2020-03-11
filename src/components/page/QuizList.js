import React from 'react' 
import { Link } from 'react-router-dom'

const QuizList = props => {
    return(
        (
            <div className="card-container flex-grow-1 my-2">
                <div className="card h-100 m-md-2">
                <Link to={'/quiz/' + props.info.id} className="h-100">
                    <div className="card-body">
                    <h5 className="border-bottom border-dark">{props.info.title}</h5>
                        <p className="card-text text-dark">{props.info.description}</p>
                    </div>
                </Link>
                </div>
            </div>
            )
    )
}

export default QuizList