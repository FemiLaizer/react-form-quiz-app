import {useState, React} from 'react';
import './App.css';
import Forms from './components/Forms'
import Header from './components/Header'
import Score from './components/Score'
import Question from './components/Question'

// import questions
import {questions} from './components/Questions'
import Button from './components/Button';

function App() {

  const [question, setQuestion] = useState(questions);

  const totalScore = question.reduce((total, quest) =>{
    return(
      total + quest.score
    )
  }, 0)

  const addToScore = (id, newScore) => {
    const updatedQuest = question.map(item =>{
      if(id === item.id){
        return {...item, score: newScore}
      }
      return item
    })

    setQuestion(updatedQuest)
  }

  const resetQuestion = () =>{
    console.log("resetQuestion");
  }

  const [showScore, setshowScore] = useState(false)

  return (
    <div className="App">
      <Forms />
      <div className='question'>
      <Header />
        {questions.map(item => {
         return (
                <Question showScore={showScore} key={item.id} {...item} addToScore={addToScore} />
         ) 
        })}

      <div className="btn">
      <Button onSubmit={() => setshowScore(!showScore)} text="Submit" />
      <Button onSubmit={() => resetQuestion(setQuestion(questions))} text="Reset" />
      </div>
      {showScore && <Score totalScore={totalScore} questionLength={questions.length} />}
      </div>
      
    </div>
  );
}

export default App;
