import React from 'react'
class Answer extends React.Component  {
    state = {
        checked: false,
        answer: this.props.answer,
        correct: this.props.correct,
    }


    handleChange = (e) => {
        console.log(this.props.answer)
        console.log(this.state.answer)
        this.setState({checked: true,
        answer: e.target.value})
    }

    render () {
        return(
            <div>
                <label className="radio-inline">
                <input 
                type="radio" 
                checked={this.state.checked} 
                value={this.state.answer}
                name={this.props.name}
                onChange={this.handleChange} 
                style={{marginRight: '1.3rem'}} />{this.props.answer}
                </label>
            </div>
    
        )
    }
    
}

export default Answer