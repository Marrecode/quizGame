import React from 'react'

const AddCorrectAnswer = (props) => {
    return (
        <div className="input-group mt-4">
            <label htmlFor="Answer" className="correct"></label>
                <input
                type="text"
                id="correct"
                aria-label="correct answer"
                placeholder="enter the correct answer"
                className="form-control"
                onChange={props.onChange}
                value={props.correct}
                />
        </div>
    )
}

export default AddCorrectAnswer
