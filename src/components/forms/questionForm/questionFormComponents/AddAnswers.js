import React from 'react'

const AddAnswers = (props) => {

    console.log(props.answer)

    return (
            <div className="input-group mt-4">
            <label htmlFor="Answer" className="question"></label>
                <input
                type="text"
                id="answers"
                aria-label="add answer"
                placeholder="add answer"
                className="form-control"
                onChange={props.onChange}
                value={props.answer}
                />
            <div className="input-group-append">
                <button 
                className="btn btn-outline-secondary"
                type="button" 
                id="buttonAdd"
                onClick={props.onClick}
                >Add</button>
                </div>
            </div>
    )
}

export default AddAnswers
