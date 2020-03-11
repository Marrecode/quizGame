import React from 'react'
import Answer from './Answer'
import MultiAnswer from './MultiAnswer'



class Card extends React.Component {
    
    state = {
        multipleCorrectArray: [],
    }

    getPointsSingle = (e) => {
        if(e.target.value === this.props.data.correct[0]) {
            this.props.onChange(Number(this.props.data.points), this.props.name)
        } else {
            this.props.onChange(0, this.props.name)
        }
    }
    
    getPointsMultiple = (e) => {
        let checked = e.target.value
        //Kolla om det redan finns i en array. Om det redan finns, ta bort det. Om det inte finns, lägg till det.
        if(!this.state.multipleCorrectArray.includes(checked)) {
            let array = [...this.state.multipleCorrectArray]
            array.push(checked)

            this.setState({
                multipleCorrectArray: array
            }, () => this.props.onChange(this.checkMultiple(), this.props.name))

        } else {
            let newArray = this.state.multipleCorrectArray.filter(c => c !== checked)
            this.setState({
                multipleCorrectArray: newArray
            }, () => this.props.onChange(this.checkMultiple(), this.props.name))
        }
    }
    


    checkMultiple = () => {
        let points = 0

        // FIXA SÅ ATT MAN INTE FÅR ALLA RÄTT OM MAN BARA KLICKAR I ALLT GDDDAMMIIITTT
        
        for(let i = 0; i < this.state.multipleCorrectArray.length; i++) {
            // console.log(this.state.multipleCorrectArray)
            // console.log(this.props.data.correct)
            if(this.props.data.correct.includes(this.state.multipleCorrectArray[i])) {
                points = points + (Number(this.props.data.points)/this.props.data.correct.length)
            }
        }
        // console.log(points)
        
        return points
    }

    
    // // Ger endast poäng om man klickat i alla rätta svar...
    // checkMultiple = () => {
    //     //Kolla om arrayen stämmer överens med den correcta arrayen, om det gör det, sätt poäng, om inte, sätt poäng till 0
    //     if(this.state.multipleCorrectArray.length !== this.props.data.correct.length) {
    //         return 0
    //     } else {
    //         let sortedStateArray = this.state.multipleCorrectArray
    //         sortedStateArray.sort()

    //         let sortedCorrectArray = this.props.data.correct.sort()

    //         for(let i = 0; i < sortedCorrectArray.length; i++) {
    //             if(sortedCorrectArray[i] !== sortedStateArray[i]) {
    //                 return 0
    //             } else {
    //                 return this.props.data.points
    //             }
    //         }
    //     }
    // }

    
    render() {

    let i = 0
    const type = this.props.data.type
    const answers = (type === 'single')
    ?
     this.props.data.answers.map(q => 
        <Answer 
        onChange={this.getPointsSingle}
        correct={this.props.data.correct}
        answer={q}
        name={this.props.name}
        key={i++} />)
    : 
    this.props.data.answers.map(q => 
        <MultiAnswer
        onChange={this.getPointsMultiple}
        correct={this.props.data.correct}
        answer={q}
        name={this.props.name}
        key={i++} />)

    return (

        <div className="card mb-3 w-100">
            <div className="card-body">
                <h5 className="card-title text-center">Fråga {this.props.name + 1}</h5>
                <p className="card-text text-center">{this.props.data.question}</p>
                <div 
                    className="d-flex flex-column ml-5"
                    >
                    {answers}
                </div>
            </div>
        </div>
        )
    } 
}

export default Card