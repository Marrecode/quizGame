import React from 'react'
class MultiAnswer extends React.Component  {
    state = {
        checked: false,
        name: this.props.name,
        correct: this.props.correct,
    }


    handleChange = () => {
        console.log(this.props.answer)
        this.setState({checked: true})
    }

    render () {
        return(
            <div>
                <label className="radio-inline">
                <input 
                type="checkbox" 
                checked={this.state.checked}
                name={this.state.name}
                onChange={this.handleChange} 
                style={{marginRight: '1.3rem'}} />{this.props.answer}
                </label>
            </div>
    
        )
    }
    
}

export default MultiAnswer