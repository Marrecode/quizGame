import React  from 'react';
import { Link } from 'react-router-dom'
import { db } from '../../modules/firebase';

class AddTitle extends React.Component{
    state = {
        title: '',
        isSubmitted: false,
    }


    handleForm = (e) => {
        e.preventDefault();
        
        const Create = {
            title: this.state.title
        }

        db.collection("quiz").add( Create ).then(() => {
			console.log("My title is: ", this.state.title)
		}).catch(err => {
            console.error(err)
        })
        this.setState({
			isSubmitted: true,
		})
}

    handleInputChange = (e) => {
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
        
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>

        {	this.state.isSubmitted
						? <AddQuizForm data={this.state} />
						: ""
				}
        
        </div>
        )
    }
}

export default AddTitle;