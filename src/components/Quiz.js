import React from 'react'
import Card from './Card'
import { db } from '../modules/firebase'

class Quiz extends React.Component {

    handleSubmit = () => {
        console.log('Im submitting')
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    {/* {card} */}
    
                    <button type="submit">Send answers</button>
                </form>
            </div>
        )
    }
}

export default Quiz;