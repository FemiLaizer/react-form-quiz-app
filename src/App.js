import { useState, React } from 'react';
import './App.css';
import Forms from './components/Forms'
import Header from './components/Header'
import Score from './components/Score'
import Question from './components/Question'

// import questions
import { questions } from './components/Questions'
import Button from './components/Button';

function App() {

  const [question, setQuestion] = useState(questions);

  const totalScore = question.reduce((total, quest) => {
    return (total + quest.score)
  }, 0)

  const addToScore = (id, newScore) => {
    const updatedQuest = question.map(item => {
      if (id === item.id) {
        return { ...item, score: newScore }
      }
      return item
    })

    setQuestion(updatedQuest)
  }

  const saveUser = (user) => {
    window.localStorage.setItem("user", JSON.stringify(user))
  }

  const checkUser = (username, mail, password) => {
    const user = JSON.parse(window.localStorage.getItem('user'))
    if (user.user !== username || user.email !== mail || user.pass !== password) {
      alert("User does not exist")
      setshowForms(true)
    }
  }

  const resetQuestion = () => {
    setQuestion(questions)
  }

  const [showForms, setshowForms] = useState(true)
  const [showScore, setshowScore] = useState(false)

  return (
    <div className="App">
      {showForms && <Forms setshowForms={() => setshowForms(!showForms)} saveUser={saveUser} checkUser={checkUser} />}
      <div className='question'>
        <Header />
        {questions.map(item => {
          return (
            (!showForms) && <Question showScore={showScore} key={item.id} {...item} addToScore={addToScore} />
          )
        })}

        <div className="btn">
          <Button onSubmit={() => setshowScore(!showScore)} text="Submit" />
          <Button onSubmit={() => resetQuestion()} text="Reset" />
        </div>
        {showScore && <Score totalScore={totalScore} questionLength={questions.length} />}
      </div>

    </div>
  );
}

export default App;
