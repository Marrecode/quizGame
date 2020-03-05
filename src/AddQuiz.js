import React  from 'react';

class AddQuiz extends React.Component{
    state = {
        answer: null,
        correct: null,
        question: null
    }

    handleForm = (e) => {
        e.preventDefault();

        console.log('want to add', this.state);
        
    }

    handleTitle = (e) => {
        console.log('something changed...', e.target.value);

        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    render() {
        return (
            

        <div id="form">
            <h1 className="mb-5">Quiz</h1>

            <form id="login-form" onSubmit={this.handleForm}>
                <div className="form-gro" id="formfull">
                    <label htmlFor="question">Fråga </label>
                    <input type="question" id="question" className="form-control" onChange={this.handleTitle} />
                </div>

                <div className="form-group">
                    <label htmlFor="answer">Svar</label>
                    <input type="answer" id="answer" className="form-control" onChange={this.handleTitle} />
                </div>

                <div className="form-group">
                    <label htmlFor="answer">Svar</label>
                    <input type="answer" id="answer" className="form-control" onChange={this.handleTitle} />
                </div>

                <div className="form-group">
                    <label htmlFor="answer">Svar</label>
                    <input type="corecct" id="correct" className="form-control" onChange={this.handleTitle} />
                </div>

                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
 
         )
    }
}

export default AddQuiz;