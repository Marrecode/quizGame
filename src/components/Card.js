import React from 'react'
import Answer from './Answer'


class Card extends React.Component {

    handleChange = (e) => {
        this.props.onChange(this.setPoints(e.target.value), this.props.name)
    }

    checkIfRight = (a) => {
        if(a === this.props.data.correct) {
            return true
        } else {
            return false
        }
    }

    setPoints = (thing) => {
        if(this.checkIfRight(thing)) {
            return this.props.data.points
        } else {
            return 0
        }
    }

    render() {
        const answers = this.props.data.answers.map(q => <Answer answer={q} name={this.props.name} onChange={this.handleChange} />)
        
        return (
            <div onChange={this.handleChange} className="card w-100">
                    <div className="card-body">
                        <h5 className="card-title">Fråga 1</h5>
                        <p className="card-text">{this.props.data.question}</p>
                        <div>
                            {answers}
                        </div>
                    </div>
                </div>
        )
    }

}

export default Card