import React, { useState } from "react"
import styled from "styled-components"
import { deviceMax } from "../Primitives"
import { Button } from "../Primitives"
import "@reach/slider/styles.css"

interface Props {
  data: any
}

// eslint-disable-next-line sonarjs/cognitive-complexity
const Questionnaire = (props: Props) => {
  const [array, setArray] = useState([])

  const [answer, setAnswer] = useState(0)

  const [checked, setChecked] = useState(false)
  const [errors, setErrors] = useState(0)

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [finishedAnswering, finishAnswering] = useState(false)
  const [isDone, setIsDone] = useState(false)

  const [average, setAverage] = useState()
  const [difference, setDifference] = useState()
  const [timeValue, onChange] = useState("10:00")

  const [caffeineQuiz, setCQ] = useState(false)
  const [result, setResult] = useState(0)

  const [sliderValue, setSliderValue] = useState(30)

  let i = 0

  props.data.questions.map(() => (i = i + 1))
  const maxQuestions = i - 1

  const handleInputChange = (e: any, score: any) => {
    const value = e.target.value
    setAnswer(value)
    setChecked(score)
  }

  const selectCalc = () => {
    if (checked === false) {
      setErrors(1)
    } else {
      setCurrentQuestion(currentQuestion + 1)
      if (currentQuestion === maxQuestions) {
        setIsDone(true)
      }

      array.push([answer])

      let sum: any = 0

      for (let k = 0; k < array.length; k++) {
        const numbers = array[k]
        sum += Number(numbers)
      }

      const avg: any = sum / array.length
      const diff: any = 100 - avg

      setAverage(avg)
      setDifference(diff)

      setChecked(false)
      setErrors(0)

      finishAnswering(false)
    }
  }

  return (
    <>
      {!isDone ? (
        <div>
          <Question>
            {currentQuestion + 1}. &nbsp;
            {props.data.questions[currentQuestion].question.question}
            <br />
            <QuestionStatus>
              Question {currentQuestion + 1} out of {maxQuestions + 1}
            </QuestionStatus>
          </Question>
          <AnswerWrap>
            {props.data.questions[currentQuestion].type == "Select" &&
              props.data.questions[currentQuestion].answers?.map(
                ({ title, score }: any) => (
                  <>
                    <Label>
                      <RadioInput
                        type="radio"
                        value={score}
                        name={score}
                        onChange={e => handleInputChange(e, score)}
                        checked={score === checked}
                      />
                      {title}
                    </Label>
                  </>
                )
              )}
          </AnswerWrap>
          <ErrorMsg>{errors === 1 ? "Please select a response." : ""}</ErrorMsg>
          <NextQuestion onClick={selectCalc}>Next select</NextQuestion>
        </div>
      ) : (
        <ResultsWrap>
          <NextReviewWrap>
            <Button to="/questionnaires">Take Another Quiz</Button>
          </NextReviewWrap>
        </ResultsWrap>
      )}
    </>
  )
}

export default Questionnaire

const Question = styled.h2`
  text-align: center;
`

const AnswerWrap = styled.div`
  margin: auto;
  padding-top: 1rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: wrap;
  -ms-flex-flow: wrap;
  flex-flow: wrap;
  -webkit-align-items: stretch;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  width: 600px;

  @media ${deviceMax.tablet} {
    padding: 2rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
const NextQuestion = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 95%;
  padding: 0.7rem 2rem 0.7rem 2rem;
  margin: 3rem 0 1rem;
  font-size: 1rem;
  text-decoration: none;
  border: 2px solid black;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  position: relative;
  left: 80%;

  @media ${deviceMax.tablet} {
    margin-bottom: 0;
    min-width: 150px;
    margin-right: 20%;
  }

  @media screen and (max-width: 700px) {
    left: unset;
  }
`

const Label = styled.label`
  margin: auto 0;
  flex: 50%;
  padding: 0.8rem;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1.1rem;

  &:hover {
    cursor: pointer;
    font-size: 1.1rem;
    background-color: rgb(219, 213, 224);
    border-radius: 30px;
  }

  @media screen and (min-width: 768px) {
    flex: 50%;
  }
`

const RadioInput = styled.input`
  outline: none;
  cursor: pointer;
  margin-right: 1rem;
`
const ResultsWrap = styled.div`
  p {
    line-height: 26px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;

    h2 {
      text-align: center;
    }

    p {
      margin-bottom: 50px;
    }
  }
`

const ErrorMsg = styled.p`
  color: var(--radiantBlue);
  font-weight: 500;
  text-align: center;

  @media screen and (max-width: 700px) {
    margin-top: 50px;
  }
`

const NextReviewWrap = styled.div`
  width: max-content;
  margin: 50px auto 0px auto;
`

const QuestionStatus = styled.small`
  font-size: 12px;
  font-weight: 400;
`
