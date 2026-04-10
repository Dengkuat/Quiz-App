import { useState } from "react";
import { questions } from "../components/Questions"
import { useParams, useNavigate } from "react-router-dom"
import { useResult } from "../Context/useContext";


export const QuestionTemplate = () => {
  const [click, setClick] = useState<boolean>(false)
  const { id } = useParams();
  const navigation = useNavigate()
  const question = questions[Number(id) - 1]
  const answers = question.options
  const {setResult} = useResult()

  const handleNavigation = () => {
    setClick(false)
    if (Number(id) + 1 <= 10) {
      return navigation(`/QuestionTemplate/${Number(id) + 1}`)
    }
    return navigation(`/result`)
  } 

  const handleCorrect = () => {
    setClick(false)
    if(!click) return

    if (Number(id) + 1 <= 10) {
      return navigation(`/QuestionTemplate/${Number(id) + 1}`)
    }
    return navigation(`/result`)
  }

  const handleRightAnswerSum = (index:number) =>{
    setClick(true)
    if(index === question.correct){
    setResult((prev) => prev+1)
    }
  }
console.log(answers)

  return (
    <div>
      <div className="h-screen flex justify-evenly items-center flex-col">

        <div className="text-3xl font-bold">
          <h1>Question {id} out of 10</h1>
        </div>

        <div className="text-3xl font-semibold">
          <p>{question.question}</p>

        </div>

        <div className="grid grid-cols-2 gap-10 text-2xl cursor-pointer">
          {answers.map((solution, index) => (
            <p
            key={index}
            onClick={() => handleRightAnswerSum(index)}
            className={click ? index === question.correct ?
              "text-green-700"
              :
              "text-red-700":"text-black"}
            >{index + 1}.  {solution}</p>
          ))}
        </div>

        <div className="flex justify-end pt-6 space-x-20">
          <button
            className="border rounded-2xl py-2 px-6 bg-blue-800 text-white hover:bg-blue-900 duration-300 "
            onClick={() => handleCorrect()}
          >
            Next Question
          </button>

          <button
            className="border rounded-2xl py-2 px-16 bg-blue-800 text-white hover:bg-blue-900 duration-300 "
            onClick={() => handleNavigation()}
          >
            Skip
          </button>
        </div>
      </div>

    </div>
  )
}
