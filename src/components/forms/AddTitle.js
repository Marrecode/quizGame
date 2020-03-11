import React  from 'react';
import { Link } from 'react-router-dom'
import { db } from '../../modules/firebase';
// import AddQuestionsForm from '../forms/questionForm/AddQuestionsForm'

class AddTitle extends React.Component{
    state = {
        title: '',
        description: '',
        id: null,
        isSubmitted: false,
    }


    handleForm = (e) => {
        e.preventDefault();
        
        const create = {
            title: this.state.title,
            description: this.state.description,
            questions: []
        }

        db.collection("quiz").add( create ).then(doc=> {
            console.log("My title is: ", this.state.title)
            console.log("My title is: ", this.state.description)
            
            this.setState({
                id: doc.id
            },() => this.props.history.push('/addquiz/' + this.state.id))
		}).catch(err => {
            console.error(err)
        })

        this.setState({
			isSubmitted: true,
		})
}

    handleInputChange = (e) => {
        console.log(e.target.value)
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

            <input
                    type="text"
                    id="title"
                    aria-label="Title of you Quiz"
                    placeholder="Quiz title"
                    className="form-control"
                    onChange={this.handleInputChange}
					value={this.state.title}
                />
            <input
                    type="description"
                    id="description"
                    aria-label="Title of you Quiz"
                    placeholder="Quiz Description"
                    className="form-control"
                    onChange={this.handleInputChange}
					value={this.state.description}
                />
        
        {/* <button type="submit" className="btn btn-primary mt-3">Submit</button> */}
        <Link onClick={this.handleForm} to={'./addquiz/' + this.state.id}>Submit</Link>
        </form>

        {/* {	this.state.isSubmitted
					? <AddQuestionsForm data={this.state} />
					: ""
				} */}
        
        </div>
        )
    }
}

export default AddTitle;