import React from 'react'

const Answer = props => {

    // console.log('props', props)
    return(
        <div onChange={props.onChange}>
            <label className="radio-inline"><input type="radio" name={props.name} value={props.answer} />{props.answer}</label>
        </div>

    )
}

export default Answer