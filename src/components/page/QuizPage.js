import React from 'react'
import Card from '../Card'
import { db } from '../../modules/firebase'
// import { v4 as uuidv4 } from 'uuid';

class QuizPage extends React.Component {
    
    state = {
        quiz: null,
        points: []
    }
    
    componentDidMount() {
        db.collection('quiz').doc(this.props.match.params.quiz_id).get().then(querySnapshot => {
            this.setState({quiz: querySnapshot.data()})
        })
    }

    // shuffle(array) {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    //     return array
    // }

    handleSubmit = (e) => {
        e.preventDefault()

        let sumPoints = this.state.points.reduce((sum, points) => {
            if(!sum) {
                sum = 0
            }
            return sum + Number(points)
        }, 0)
        this.setState({
            sumPoints: sumPoints
        })
    }

    handlePoints = (points, index) => {
        let array = this.state.points
        array[index] = points

        this.setState({
            points: array
        })
    }

    getHowManyPointsTotal = () => {
        return this.state.quiz.questions.reduce((sum, question) => {
            return sum + Number(question.points)
        }, 0)
    }

    render() { 

        let i = 0
        let j = 0
        const card = this.state.quiz
        ? this.state.quiz.questions.map(info => <Card onChange={this.handlePoints} data={info} name={i++} type={info.type} key={j++}/>)
        : <h1 style={{color: '#fff'}}>Loading...</h1>
        return (
        <div className="container">
            <form onSubmit={this.handleSubmit} className="d-flex flex-column align-items-center">
                {this.state.quiz
                    ? ( <div className="text-white mb-2 text-center">
                        <h1>{this.state.quiz.title}</h1>
                        <p>{this.state.quiz.description}</p>
                        </div>)
                    : ''
                }
                
                <div className="form-group w-md-75">
                    {card}

                    {this.state.sumPoints >= 0
                        ? (<p className="text-white text-center points-text my-4">You got {Math.round(this.state.sumPoints * 10) / 10} points out of {Number(this.getHowManyPointsTotal())}!</p>)
                        : ''
                    }

                    <button className="btn btn-success w-100" type="submit">Send Answers</button>
                </div>
            </form>
        </div>
    )}
}

export default QuizPage