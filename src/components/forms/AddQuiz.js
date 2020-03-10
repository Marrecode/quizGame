import React from 'react'

class AddQuiz extends React.Component {
    state = {
        title: '',
        description:'',
        questions: [
            {
                question:'',
                answers: [""],
                correct: '',
                points: null,
                type: null
            }
        ],

    }

    handleInputChange = (e) => {
        console.log(e.target.id)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleAddQuestionClick = (e) => {
        e.preventDefault();
		const questions = this.state.questions;
		questions.push({
			question: '',
            answers: [""],
            correct: '',
            points: null,
            type: null
        });

		this.setState({
			questions
		});
    }

    handleAddAnswer = (e) => {
        e.preventDefault()
        const newQuestions = [...this.state.questions]
        const newAnswer = newQuestions[this.state.questions.length - 1].answers
        newAnswer.push("")

        // Add another input field for answer
        this.setState({
            newQuestions
        })
    }


    handleInputStepChange = (e, i) => {
		const questions = this.state.questions;
		questions[i].question = e.target.value;

		this.setState({
			questions
		});
    }
    
    handleInputAnswersChange = (e, i) => {
		const answers = this.state.questions[this.state.questions.length - 1].answers;
        answers[i] = e.target.value;
        
        console.log(this.state.questions)
        let questions = this.state.questions

		this.setState({
			questions
		});
	}

    render() {
        // console.log(this.state)
        return(
            <form className="container">
                <input onChange={this.handleInputChange} id="title" className="form-control" type="text" placeholder="Enter the title of your quiz" />
                <input onChange={this.handleInputChange} id="description" className="form-control" type="text" placeholder="Enter a description of your quiz" />


                <div className="steps-wrapper mb-4">
					{/* <h3>Questions</h3> */}
					{
						this.state.questions.map((question, i) =>(
							<div key={i}>
								<input
									type="text"
									className="form-control"
									onChange={e => { this.handleInputStepChange(e, i) }}
									aria-label={`Enter question ${i+1}`}
									placeholder={`Enter question ${i+1}`}
									value={question.title}
								/>
                    {
                        this.state.questions[i].answers.map((answer, i) => (
                            <div className="input-group">
                            <input
									type="text"
									className="form-control"
									onChange={e => { this.handleInputAnswersChange(e, i) }}
									aria-label={`Enter answer ${i+1}`}
									placeholder={`Enter answer ${i+1}`}
									value={answer.title}
								/>
                                <div className="input-group-append">
                                    <button onClick={this.handleAddAnswer}>Add answer</button>
                                </div>
                            </div>
                        ))
                    }


							</div>
						))
					}

					<div className="mt-3">
						<button className="btn btn-primary" onClick={this.handleAddQuestionClick}><span className="fas fa-plus-square"></span> Add question</button>
					</div>
				</div>


            </form>
        )
    }
}

export default AddQuiz
