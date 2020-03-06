import React from 'react'

const AddType = (props) => {
    return (
        <div className="input-group mt-4">
            <div className="btn-group">
                <button 
                    type="button"
                    value={props.type}
                    className="btn btn-danger dropdown-toggle" 
                    data-toggle="dropdown" aria-haspopup="true" 
                    aria-expanded="false">
                    Choose question type
                </button>
            <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Multiple</a>
                <a className="dropdown-item" href="#">Single</a>
            </div>
        </div>
    </div>
    )
}

export default AddType
