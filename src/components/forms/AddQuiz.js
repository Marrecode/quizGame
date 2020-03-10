import React from 'react'

class AddQuiz extends React.Component {
    state = {
        title: '',
        description:'',
        questions: [
            // {
            //     question:'',
            //     answers: [""],
            //     correct: '',
            //     points: null,
            //     type: null
            // }
        ],

        temp: [
            {
                question:'',
                answers: [""],
                correct:'',
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
        const questions = this.state.questions
        questions.push(...this.state.temp)

        this.setState({
            questions,
            temp: [
                {
                    question:'',
                    answers: [""],
                    correct:'',
                    points: null,
                    type: null
                }
            ]
        }, () => console.log(this.state))
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
    

    handleAddCorrect = (answer) => {
        // KOLLA SÅ ATT DET ÄR CHECKAT!!!!
        console.log(answer)
        console.log(this.state.questions)
    }


    render() {
        return(
            <div>
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
                                        <input onChange={() => {this.handleAddCorrect(answer)}} type="checkbox" value={answer}/>
                                    </div>
                                        <button className="btn btn-success" onClick={this.handleAddAnswer}>Add answer</button>
                                    </div>
                                </div>
                            ))
                        }
    
    
    							</div>
    						))
    					}
                        <h2>{this.state.question}</h2>
    					<div className="mt-3">
    						<button className="btn btn-primary" onClick={this.handleAddQuestion}><span className="fas fa-plus-square"></span> Add question</button>
    					</div>
    				</div>
    
    
                </form>

                {this.state.questions
                    ? (<div>
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

            
        )
    }
}

export default AddQuiz
