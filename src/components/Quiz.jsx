import React, { useEffect, useState } from "react"
// NAVIGATE
import { useNavigate } from "react-router-dom"
// DB
import { questions } from "../questions"
// ICONS
import { GiCrownedHeart } from "react-icons/gi"
import { FaTrophy, FaQuestion } from "react-icons/fa"
// GIF
import wrong from "../images/wrong.gif"
import rob from "../images/rob.jpg"
import right from "../images/right.gif"

const Quiz = () => {
  // STATES
  const [inputResponse, setInputResponse] = useState("")
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [counter, setCounter] = useState(1)
  const [question, setQuestion] = useState("")
  const [gif, setGif] = useState(rob)

  // NAVIGATE
  let navigate = useNavigate()

  // INIT
  useEffect(() => {
    setQuestion(questions[currentQuestion].question)
  }, [currentQuestion])

  // HANDLE CHANGE
  const handleChange = (e) => {
    e.preventDefault()
    setInputResponse(e.target.value)
  }

  // HANDLE FOCUS
  const handleFocus = (e) => setInputResponse((e.target.value = ""))

  // HANDLE CLICK
  const handleClick = () => {
    console.log(inputResponse) //<--<< Delete
    const correctAnswer = questions[currentQuestion].correctAnswer
    if (inputResponse !== "") {
      if (correctAnswer === inputResponse) {
        setScore(score + 1)
        setGif(right)
        setTimeout(() => {
          nextQuestion()
        }, 3800) //<--<< Tweek time
      } else {
        setGif(wrong)
        setTimeout(() => {
          nextQuestion()
        }, 3800) //<--<< Tweek time
      }
    } else {
      alert("Ney! enter your answer Franciska!")
    }
  }

  // NEXT QUESTION
  const nextQuestion = () => {
    console.log(counter) //<--<< Delete
    if (counter < 5) {
      setGif(rob)
      setCounter(counter + 1)
      setCurrentQuestion(currentQuestion + 1)
    } else {
      endGame()
    }
  }

  // END GAME
  const endGame = () => (score >= 4 ? navigate("/win") : navigate("/lose"))

  // RENDER
  return (
    <div className="quiz__container">
      <div className="quiz__counter">
        <div>
          <FaQuestion />
          <span className="quiz__number">{counter}</span>/5
        </div>
        <div>
          <FaTrophy />
          <span className="quiz__number">{score}</span>/5
        </div>
      </div>
      <img className="quiz__gif" src={gif} alt="img-result" />
      <div className="quiz__question">{question}</div>
      <input
        className="quiz__input"
        type="text"
        onChange={handleChange}
        onFocus={handleFocus}
      />
      <button className="quiz__btn" onClick={handleClick}>
        <GiCrownedHeart size={30} />
      </button>
    </div>
  )
}

export default Quiz
