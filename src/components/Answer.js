import React from 'react'

class Answer extends React.Component {
    render() {
        return(
            <div>
                {/* <div className="radio">
                    <input type="radio" id="???" name="???" value={this.props.answer} />
                    <label for="huey">{this.props.answer}</label>
                    
                </div> */}

                <label class="radio-inline"><input type="radio" name="optradio" />{this.props.answer}</label>
            </div>
        )
    }
}

export default Answer