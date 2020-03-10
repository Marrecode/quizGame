import React from 'react'

const AddCorrectAnswer = (props) => {
    return (
        <div className="input-group mt-4">
            <label htmlFor="Answer" className="question"></label>
                <input
                type="text"
                id="answer"
                aria-label="correct answer"
                placeholder="enter the correct answer"
                className="form-control"
                onChange={props.handleInputTitleChange}
                value={props.question}
                />
        </div>
    )
}

export default AddCorrectAnswer
