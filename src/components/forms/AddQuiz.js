import React from 'react'

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
    

    handleAddCorrect = (e, answer) => {
        if(e.target.checked) {
            //Lägg till i state

            const temp = [...this.state.temp]
            temp[0].correct.push(answer)

            this.setState({
                temp
            },() => console.log(this.state.temp))

        } else {
            // ta bort från state om den är satt
        }
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
                        <h2>{this.state.question}</h2>
    					<div className="mt-3">
    						<button className="btn btn-primary" onClick={this.handleAddQuestion}><span className="fas fa-plus-square"></span> Add question</button>
    					</div>
    				</div>
    
                        <button className="btn btn-success">Submit Quiz</button>
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
