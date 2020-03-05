import React from 'react';
<<<<<<< HEAD

function Quiz () {
    return (
        <div className="container">

            <div className="card w-100">
            <div className="card-body">
                <h5 className="card-title">Fråga 1</h5>
                <p className="card-text">Vad heter jag?</p>
            <div className="style-buttons" id="stylebutton">
                <button type="button" className="btn btn-primary">Svar 1</button>
                <button type="button" className="btn btn-primary">Svar 2</button>
                <button type="button" className="btn btn-primary">Svar 3</button>
                <button type="button" className="btn btn-primary">Svar 4</button>
            </div>
            </div>
            </div>
            
            <div className="card w-100">
            <div className="card-body">
                <h5 className="card-title">Fråga 1</h5>
                <p className="card-text">Vad heter jag?</p>
            <div className="style-buttons">
                <button type="button" className="btn btn-primary">Svar 1</button>
                <button type="button" className="btn btn-primary">Svar 2</button>
                <button type="button" className="btn btn-primary">Svar 3</button>
                <button type="button" className="btn btn-primary">Svar 4</button>
            </div>
            </div>
            </div>

            <div className="card w-100">
            <div className="card-body">
                <h5 className="card-title">Fråga 1</h5>
                <p className="card-text">Vad heter jag?</p>
            <div className="style-buttons">
                <button type="button" className="btn btn-primary">Svar 1</button>
                <button type="button" className="btn btn-primary">Svar 2</button>
                <button type="button" className="btn btn-primary">Svar 3</button>
                <button type="button" className="btn btn-primary">Svar 4</button>
            </div>
            </div>
            </div>

            <div className="card w-100">
            <div className="card-body">
                <h5 className="card-title">Fråga 1</h5>
                <p className="card-text">Vad heter jag?</p>
            <div className="style-buttons">
                <button type="button" className="btn btn-primary">Svar 1</button>
                <button type="button" className="btn btn-primary">Svar 2</button>
                <button type="button" className="btn btn-primary">Svar 3</button>
                <button type="button" className="btn btn-primary">Svar 4</button>
            </div>
            </div>
            </div>

            <div className="card w-100">
            <div className="card-body">
                <h5 className="card-title">Fråga 1</h5>
                <p className="card-text">Vad heter jag?</p>
            <div className="style-buttons">
                <button type="button" className="btn btn-primary">Svar 1</button>
                <button type="button" className="btn btn-primary">Svar 2</button>
                <button type="button" className="btn btn-primary">Svar 3</button>
                <button type="button" className="btn btn-primary">Svar 4</button>
            </div>
            </div>
            </div>

=======
import Card from './Card'

const Quiz = (props) => {

    console.log('props', props)
    console.log('props info', props.info)
    console.log('props params', props.match.params)

    

    const QnA = props.info.questions.map(eachQnA => eachQnA)
    // console.log(QnA)
    const A = QnA.map(ans => ans.answers)
    const Q = QnA.map(Qs => Qs.question)
    const Corr = QnA.map(n => n.correct)

    const card = props.info.questions.map(question => <Card questions={question} key={question.points} />)
 
    return (
        <div className="container">
            {card}
>>>>>>> master
        </div>
    )
}

export default Quiz;