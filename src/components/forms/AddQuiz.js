import React from 'react'
import { db } from '../../modules/firebase'

class AddQuiz extends React.Component {
    state = {
        title: '',
        description:'',
        // questions: [
        //     {
        //         question:'',
        //         answers: [""],
        //         correct: '',
        //         points: null,
        //         type: null
        //     }
        // ],

        temp: [
            {
                question:'',
                answers: [""],
                correct:[],
                points: null,
                type: null
            }
        ]
    }

    handleInputChange = (e) => {
        console.log(e.target.id)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleAddQuestion = (e) => {
        e.preventDefault();
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
                    points: null,
                    type: null
                }
            ]
        })
    }

    handleAddAnswer = (e) => {
        e.preventDefault()
        const temp = [...this.state.temp]
        const newAnswer = temp[this.state.temp.length - 1].answers
        newAnswer.push("")

        this.setState({
            temp
        })
    }


    handleInputQuestionChange = (e, i) => {
		const temp = this.state.temp;
        temp[i].question = e.target.value;

		this.setState({
			temp
        },() => console.log(this.state));
        
    }
    
    handleInputAnswersChange = (e, i) => {
        const answers = this.state.temp[this.state.temp.length - 1].answers;
        answers[i] = e.target.value;

        console.log(this.state)
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

    handleAddCorrect = (e, answer) => {
        //TÖMMA CHECKBOXES NÄR MAN SKAPAR NY FRÅGA
        // KAN INTE SKAPA EN NY FRÅGA OM INTE DET FINNS ETT KORREKT SVARRRRRRRR

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
        console.log(this.state.questions)

        db.collection('quiz').doc(this.props.match.params.id)
            .update({
                title: this.state.title,
                description: this.state.description,
                questions: this.state.questions

            })
            .then(() => {
                this.props.history.push('/')
            })



        //REDIRECT TO HOME PAGE??? OR SHOW THAT IT HAS BEEN SUCCESSFULLY ADDED????
    }

    render() {
        return(
            <div className="container">
                <form className="container">
                    <input onChange={this.handleInputChange} id="title" className="form-control" type="text" placeholder="Enter the title of your quiz" />
                    <input onChange={this.handleInputChange} id="description" className="form-control" type="text" placeholder="Enter a description of your quiz" />
    
                <br/>
                    <div className="steps-wrapper mb-4">
    
    					{
    						this.state.temp.map((question, i) =>(
    							<div key={i}>
    								<input
    									type="text"
    									className="form-control"
    									onChange={e => { this.handleInputQuestionChange(e, i) }}
    									aria-label={`Enter question ${i+1}`}
    									placeholder={`Enter question ${i+1}`}
    									value={question.question}
    								/>
                        {
                            this.state.temp[i].answers.map((answer, i) => (
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
                                    <div class="input-group-text">
                                        <input onChange={e => {this.handleAddCorrect(e, answer)}} type="checkbox" value={answer}/>
                                    </div>
                                        <button className="btn btn-success" onClick={this.handleAddAnswer}>Add answer</button>
                                    </div>
                                </div>
                            ))
                        }
    
    
    							</div>
    						))
    					}
    
    					<div className="mt-3">
    						<button className="btn btn-primary" onClick={this.handleAddQuestion}><span className="fas fa-plus-square"></span> Add question</button>
    					</div>
    				</div>
    
                        <button onClick={this.handleSubmitQuiz} className="btn btn-success">Submit Quiz</button>
                </form>

                <div className="displaying-quizes text-center text-white">
                    <h1>{this.state.title}</h1>
                    <p>{this.state.description}</p>
    
                    {this.state.questions
                        ? (<div>
                            <h2>And these are my questions</h2>
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
