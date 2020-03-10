import React from 'react'

const AddQuestions = (props) => {
    return (
            <div className="input-group mt-4">
                <label htmlFor="Question" className="question"></label>
                <input
                    type="text"
                    id="questions"
                    aria-label="Type in your question"
                    placeholder="add your question:"
                    className="form-control"
                    onChange={props.onChange}
                    value={props.question}
                />
            </div>
    )
}

export default AddQuestions
