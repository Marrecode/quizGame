import React from 'react'

const Answer = (props) => {
    return(
        <div>
            <label className="radio-inline">
                <input 
                    onChange={props.onChange}
                    type="radio" 
                    name={props.name} 
                    value={props.answer}
                    style={{marginRight: '1.3rem'}} />
                    {props.answer}
                </label>
        </div>

    )
}

export default Answer