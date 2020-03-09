import React  from 'react';
import { Link } from 'react-router-dom'
import { db } from '../../modules/firebase';

class AddTitle extends React.Component{
    state = {
        title: '',
    }

    handleForm = (e) => {
        e.preventDefault();
        
        console.log('want to add', this.state);
        const Create = {
            title: this.state.title
        }

        db.collection("quiz").add( Create ).then(doc => {
			console.log("My title is: ", this.state.title)
		}).catch(err => {
            console.error(err)
            
            
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
            
                    
        </div>    
        <Link to={'./AddQuizForm'}  className="btn btn-primary mt-3">Submit</Link>
        </form>
        
        </div>
        )
    }
}

export default AddTitle;