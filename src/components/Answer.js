import React from 'react'

class Answer extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <input type="radio" id="???" name="???" value={this.props.answer} />
                    <label for="huey">{this.props.answer}</label>
                </div>
            </div>
        )
    }
}

export default Answer