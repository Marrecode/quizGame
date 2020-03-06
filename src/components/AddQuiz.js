import React  from 'react';
import { Link } from 'react-router-dom'
import { db } from '../modules/firebase';

class AddQuiz extends React.Component{
    state = {
        title: '',
        answer: '',
        correct: '',
        question: []
    }
    

    handleForm = (e) => {
        e.preventDefault();

        console.log('want to add', this.state);
        const Create = {
            title: this.state.title,
        }

        db.collection("quiz").add( Create ).then(res => {
			console.log("My title is: ", this.state.title)
		}).catch(err => {
			console.error(err)
		})
	}

    handleInputTitleChange = (e) => {
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
                    onChange={this.handleInputTitleChange}
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
                    onChange={this.handleInputTitleChange}
					value={this.state.question}
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="buttonAdd">Add</button>
                </div>
            </div>
            
            <div className="input-group mt-4">
                <label htmlFor="Answer" className="question"></label>
                <input
                    type="text"
                    id="question"
                    aria-label="your answer"
                    placeholder="your answer"
                    className="form-control"
                    onChange={this.handleInputTitleChange}
					value={this.state.question}
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="buttonAdd">Add</button>
                </div>
            </div>
            
            <div className="input-group mt-4">
                <label htmlFor="Answer" className="buttonAdd"></label>
                <input
                    type="text"
                    id="answer"
                    aria-label="Type in your"
                    placeholder="your answer"
                    className="form-control"
                    onChange={this.handleInputTitleChange}
					value={this.state.answer}
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="buttonAdd">Add</button>
                </div>
            </div>
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