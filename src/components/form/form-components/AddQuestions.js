import React from 'react'

const AddQuestions = (props) => {
    return (
        <div className="input-group mt-4">
                <label htmlFor="Question" className="question"></label>
                <input
                    type="text"
                    id="question"
                    aria-label="Type in your question"
                    placeholder="add your question:"
                    className="form-control"
                    onChange={props.handleInputTitleChange}
                />
                <div className="input-group-append">
                    <button 
                    className="btn btn-outline-secondary" 
                    type="button" 
                    id="buttonAdd"
                    onClick={props.addQuestion}
                    >Add</button>
                </div>
            </div>
    )
}

export default AddQuestions
