import React from 'react'

const AddTitle = (props) => {
    return (
       <div className="input-group mt-4">
            <label htmlFor="Title" className="title"></label>
            <input
                type="text"
                id="title"
                aria-label="Title of you Quiz"
                placeholder="enter your quiz title"
                className="form-control"
                onChange={props.handleInputTitleChange}
                value={props.title}
            />
        </div>
    )
}

export default AddTitle
