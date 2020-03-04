import React from 'react'

class FrontPage extends React.Component {

    componentDidMount = () => {
        db.collection("quiz").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                console.log(doc.id, " => ", doc.data());

            });
        });
    }



    render() {
        return(
            <div>
                <h1>The Awesome Quiz Page</h1>
                {showQuizList}
            </div>
        )
    }
}





// const FrontPage = (props) => {

//     const showQuizList = props.quiz.map(quiz => {
//         return (
//             <Quiz
//                 key={quiz.id}
//                 quiz={quiz}
//             />
//         )
//     })

//     return(
//         <div>
//             <h1>The Awesome Quiz Page</h1>

//             <div>
//                 {showQuizList}
//             </div>
//         </div>
//     )
// }

export default FrontPage