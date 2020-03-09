import React from 'react'

const AddType = (props) => {
    return (
        <div className="input-group mt-4"> 
            <h3>Choose if question has single or multiple answer options</h3>
            <div style={{paddingLeft: '1.3rem', paddingTop: '0.4rem'}}>
            <select className="dropdown" onChange={props.onChange} >
                <option className="dropdown-item" value="multiple">Multiple</option>
                <option className="dropdown-item" value="single">Single</option>
            </select>    
            </div>
    </div>
    )
}

export default AddType
