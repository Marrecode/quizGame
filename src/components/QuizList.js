import React from 'react' 
import { Link } from 'react-router-dom'

const QuizList = props => {
    return(
        <Link to={'/quiz/' + props.info.id}>
        <div className="card">
                <div className="card-body">
                {/* <Link to={'/quiz/' + props.info.id}><h5>{props.info.title}</h5></Link> */}
                <h5>{props.info.title}</h5>
                    <p className="card-text">{props.info.description}</p>
                </div>
            </div>
            </Link>
    )
}

export default QuizList