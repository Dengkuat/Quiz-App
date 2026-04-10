import { useNavigate } from "react-router-dom"
import { useResult } from "../Context/useContext";

export default function Result() {
  const navigate = useNavigate()
  const {result, setResult} = useResult();

  const handleNavigation = () => {
    navigate("/QuestionTemplate/1")
    setResult(0)
  }

  const handleNavigationExit = () => {
    navigate("/")
  }
  return (
    <div className="h-screen flex justify-evenly items-center flex-col">
      
        {/* user stats  */}

        <div className="text-center space-y-7">
          <p className="text-3xl font-bold">Final Score</p>
          <p className="text-2xl">{result}/10</p>
          {result> 5 ? 
          (<p className="text-2xl">Excellent, keep it up</p>)
          :
          (<p className="text-2xl pt-7">Fair, but try better next time</p>)}
        </div>

        <div className="space-x-20">
          <button
          className="border rounded-2xl py-2 px-6 bg-blue-800 text-white hover:bg-blue-900 duration-300"
          onClick={() => handleNavigation()}
          >
            Play Again
          </button>

          <button
          className="border rounded-2xl py-2 px-6 bg-blue-800 text-white hover:bg-blue-900 duration-300"
          onClick={() => handleNavigationExit()}
          >
            Instruction
          </button>
        </div>
    </div>
  )
}
