import React from 'react'

const AddType = (props) => {
    return (
        <div className="input-group mt-4">
            <div className="btn-group">
            <h3>Choose if question has single or multiple answer options</h3>
            <div style={{paddingLeft: '1.3rem', paddingTop: '0.4rem'}}>
            <select className="dropdown" >
                <option className="dropdown-item" href="#">Multiple</option>
                <option className="dropdown-item" href="#">Single</option>
            </select>
            </div>
            
        </div>
    </div>
    )
}

export default AddType
