import React from 'react'

const MultiAnswer = (props) => {
    return(
        <div>
            <label className="radio-inline">
            <input 
            type="checkbox" 
            onChange={props.onChange}
            name={props.name}
            value={props.answer}
            style={{marginRight: '1.3rem'}} />{props.answer}
            </label>
        </div>
    
    )
}

export default MultiAnswer