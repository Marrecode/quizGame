import React from 'react'

function Quiz(props) {


    const QnA = props.info.questions.map(question => question)
    const A = QnA.map(ans => ans.answers)
    const Q = QnA.map(Qs => Qs.question)
    const Corr = QnA.map(n => n.correct)

    console.log('Quests', Q,'Answ',A, 'correct', Corr)
    
    return (
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
           <p>{props.info.title}</p>
           <div>
               <ul>
                   <li>{Q[0]}</li>
                   <li>{A[0]}</li>
                   <li>{Corr[0]}</li>
               </ul>
           </div>
        </div>
    )
}

export default Quiz
