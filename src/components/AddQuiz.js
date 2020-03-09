import React  from 'react';
import { Link } from 'react-router-dom'
import { db } from '../modules/firebase';

class AddQuiz extends React.Component{
    state = {
        title: '',
        answer: '',
        correct: '',
        question: [],
        steps: [''],
        idDOC: null,
        quizLists: [],
    }

    handleAddStepClick = e => {
        const steps = this.state.steps;
        steps.push('');

        this.setState({
            steps
        });
    }

    handleInputStepChange = (e, i) => {
		const steps = this.state.steps;
		steps[i] = e.target.value;

		this.setState({
			steps,
		});
	}
    

    handleForm = (e) => {
        e.preventDefault();
        
        console.log('want to add', this.state);
        const Create = {
            title: this.state.title,
            quizLists: [],
        }

        db.collection("quiz").add( Create ).then(doc => {
            this.setState({
                idDOC: doc.id
            })
			console.log("My title is: ", this.state.title)
		}).catch(err => {
            console.error(err)
            
            
        })
        
        db.collection('quiz').doc(this.state.idDOC).get()
        .then((snapshot) => {

			const quizList = {
				question: this.state.question,
				correct: this.state.correct,
				
            }
            snapshot.data().quizLists.push(quizList);


            db.collection('quiz').doc(this.state.idDOC).set({
                quizLists: [quizList],
            })
        
    })
}

    handleInputChange = (e) => {
        console.log('something changed...', e.target.value);

        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    render() {
        return(           
        <div>
        <h1>Create your Quiz</h1>
        <div className="btn-home">
            <Link to="/" className="btn btn-danger mt-3">Home</Link>
        </div>

        <form onSubmit={this.handleForm}>
        
        <div className="form-group">

            
            <div className="input-group mt-4">
                <label htmlFor="Title" className="title"></label>
                <input
                    type="text"
                    id="title"
                    aria-label="Title of you Quiz"
                    placeholder="Quiztitle"
                    className="form-control"
                    onChange={this.handleInputChange}
					value={this.state.title}
                />
            </div>
            
            
            <div className="input-group mt-4">
                <label htmlFor="Question" className="question"></label>
                <input
                    type="text"
                    id="question"
                    aria-label="Type in your question"
                    placeholder="Type your question:"
                    className="form-control"
                    onChange={this.handleInputChange}
					value={this.state.question}
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="buttonAdd"></button>
                </div>
            </div>

            {
            this.state.steps.map((step, i) => (
            <div key={i} className="input-group mt-4">
                <label htmlFor="Answer" className="buttonAdd"></label>
                <input
					type="text"
					className="form-control"
					onChange={e => { this.handleInputStepChange(e, i) }}
					aria-label={`Type step ${i+1}`}
					placeholder={`Type your answer`}
					value={step}
				/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="buttonAdd"></button>
                </div>
            </div>
            ))
            }
            <button className="btn btn-primary" onClick={this.handleAddStepClick}>Add Step</button>
            <div className="btn-home">
            
            
            </div>          
        </div>    
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
        
        </div>
        )
    }
}

export default AddQuiz;