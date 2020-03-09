import React from 'react'

const AddAnswers = (props) => {
    return (
            <div className="input-group mt-4">
            <label htmlFor="Answer" className="question"></label>
                <input
                type="text"
                id="question"
                aria-label="add answer"
                placeholder="add answer"
                className="form-control"
                onChange={props.handleInputTitleChange}
                value={props.answer}
                />
            <div className="input-group-append">
                <button 
                className="btn btn-outline-secondary"
                type="button" 
                id="buttonAdd"
                onClick={props.onChange}
                >Add</button>
                </div>
            </div>
    )
}

export default AddAnswers
