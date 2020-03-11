import React from 'react'
import { db } from '../../modules/firebase'

class AddQuiz extends React.Component {
    state = {
        title: '',
        description:'',
        temp: [
            {
                question:'',
                answers: [""],
                correct:[],
                points: '',
                type: null
            }
        ],
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleAddQuestion = (e) => {
        e.preventDefault();
        if((this.state.temp[0].correct.length - 1) >= 0 
            && (this.state.temp[0].answers.length) > 1 
            && this.state.temp[0].points 
            && this.state.temp[0].question) {
            document.querySelectorAll('input[type=checkbox]').forEach(checkbox => checkbox.checked = false);
            let questions
            if(!this.state.questions) {
                questions = []
                questions.push(...this.state.temp)
            } else {
                questions = this.state.questions
                questions.push(...this.state.temp)
            }
    
            this.setState({
                questions,
                temp: [
                    {
                        question:'',
                        answers: [""],
                        correct: [],
                        points: '',
                        type: null
                    }
                ]
            })
        }
    }

    handleAddAnswer = (e) => {
        e.preventDefault()
        const temp = [...this.state.temp]
        temp[0].answers.push("")

        this.setState({
            temp
        })
    }

    handleInputQuestionChange = (e) => {
    const temp = this.state.temp;
    temp[0].question = e.target.value;

    this.setState({
        temp
    });   
    }
    
    handleInputAnswersChange = (e, i) => {
        const answers = this.state.temp[0].answers
        answers[i] = e.target.value;

        let temp = this.state.temp

		this.setState({
			temp
		});
    }

    checkType = (temp) => {
        if((temp[0].correct.length - 1) > 0) {
            return 'multiple'
        } else {
            return 'single'
        }
    }


    handleAddPoints = (e) => {
        const temp = this.state.temp;
        temp[0].points = e.target.value;
        this.setState({
            temp
        },() => console.log(this.state.temp[0].points));
    }


    handleAddCorrect = (e, answer) => {
        if(e.target.checked && answer) {
            const temp = [...this.state.temp]
            temp[0].correct.push(answer)

            temp[0].type = this.checkType(temp)

            this.setState({
                temp
            },() => console.log('added', this.state.temp))

        } else if(!e.target.checked) {

            let temp = [...this.state.temp]
            let filtered;

            console.log(this.state.temp[0].correct)
            if(temp[0].correct.includes(answer)) {
                filtered = temp[0].correct.filter(r => r !== answer)
                temp[0].correct = filtered
            }

            this.setState({
                temp
            }, () => console.log('removed',this.state.temp))
        }
    }


    handleSubmitQuiz = (e) => {
        e.preventDefault()

        if(this.state.title) {
            db.collection('quiz').doc(this.props.match.params.id)
                .update({
                    title: this.state.title,
                    description: this.state.description,
                    questions: this.state.questions
    
                })
                .then(() => {
                    this.props.history.push('/')
                })
                .catch(err => console.error(err))
        }
    }

    render() {
        

        return(
            <div className="container">
                <form className="container">
                    <input onChange={this.handleInputChange} id="title" className="form-control" type="text" placeholder="Enter the title of your quiz" />
                    <input onChange={this.handleInputChange} id="description" className="form-control" type="text" placeholder="Enter a description of your quiz" />
    
                    <div className="steps-wrapper" style={{paddingTop: '2rem'}}>

                        <input onChange={this.handleInputQuestionChange} id="question" className="form-control" type="text" placeholder="Enter a question" value={this.state.temp[0].question} />
        
                            {
                                this.state.temp[0].answers.map((answer, i) => (
                                    <div className="input-group">
                                    <input
                                            type="text"
                                            className="form-control"
                                            onChange={e => { this.handleInputAnswersChange(e, i) }}
                                            aria-label={`Enter answer ${i+1}`}
                                            placeholder={`Enter answer ${i+1}`}
                                            value={answer}
                                        />
                                        <div className="input-group-append">
                                        <div className="input-group-text">
                                            <input onChange={e => {this.handleAddCorrect(e, answer)}} type="checkbox" value={answer}/>
                                        </div>
                                            <button className="btn btn-success" onClick={this.handleAddAnswer}>Add answer</button>
                                        </div>
                                    </div>
                                ))
                            }

    					</div>


                        <div style={{paddingTop: '2rem'}}>
                            {/* <label style={{color: '#fff'}}>Add ponts</label> */}

                            <input className="form-control" placeholder="Enter how many points your question is worth" value={this.state.temp[0].points} onChange={this.handleAddPoints}/>


                            {/* <input type='number'
                            className='form-control'
                            onChange={this.handleAddPoints} 
                            aria-label={'add how many points your question is worth'}
                            placeholder={'enter points'}
                            value={this.state.temp[0].points}
                            /> */}
                        </div>
    
    					<div className="mt-3">
    						<button className="btn btn-primary" onClick={this.handleAddQuestion}><span className="fas fa-plus-square"></span> Add question</button>
    					</div>
    				{/* </div> */}
    
                        <button onClick={this.handleSubmitQuiz} className="btn btn-success">Submit Quiz</button>
                </form>

                <div className="displaying-quizes text-center text-white">
                    <h1>{this.state.title}</h1>
                    <p>{this.state.description}</p>
    
                    {this.state.questions
                        ? (<div>
                            {/* <h2>And these are my questions</h2> */}
                            {this.state.questions.map(q => (
                                <div>
                                    <p>{q.question}</p>
                                    <ul>{q.answers.map(a => (
                                        <li>{a}</li>
                                    ))}</ul>
                                </div>
                            ))}
                        </div>)
                        : ''
                    }
                </div>
            </div>

            
        )
    }
}

export default AddQuiz
