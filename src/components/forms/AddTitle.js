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
            
<<<<<<< HEAD:src/components/AddTitle.js
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
                {/* <Link to={'./AddQuizForm'} className="btn btn-primary mt-3">Submit</Link> */}
                <button type="submit">Add title</button>
            </form>
=======
                    
        </div>    
        
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>

        {	this.state.isSubmitted
						? <AddQuizForm data={this.state} />
						: ""
				}
>>>>>>> master:src/components/forms/AddTitle.js
        
        </div>
        )
    }
}

export default AddTitle;