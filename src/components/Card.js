import React from 'react'
import Answer from './Answer'
import MultiAnswer from './MultiAnswer'
import { v4 as uuidv4 } from 'uuid';


class Card extends React.Component {

    handleChange = (e) => {
        this.props.onChange(this.setPoints(e.target.value), this.props.data.points)
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

    
    render = () => {


    const type = this.props.data.type
    const answers = (type === 'single')
    ?
     this.props.data.answers.map(q => <Answer correct={this.props.data.correct} answer={q} name={this.props.name} key={uuidv4()} />)
    : this.props.data.answers.map(q => <MultiAnswer correct={this.props.data.correct} answer={q} name={this.props.name} key={uuidv4()} />)

    return (

        <div className="card w-100">
            <div className="card-body">
                <h5 className="card-title">Fråga 1</h5>
                <p className="card-text">{this.props.data.question}</p>
                <div style={{
                    textAlign: 'left',
                    display:'flex',
                    marginLeft: '40%',
                    justifyContent: 'center',
                    flexDirection: 'column', 
                    alignItems:'justify'}}>
                    {answers}
                </div>
            </div>
        </div>
        )

    }
   
}


export default Card