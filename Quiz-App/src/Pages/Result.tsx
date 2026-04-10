import { useNavigate } from "react-router-dom"

export default function Result() {
  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate("/QuestionTemplate/1")
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border py-40 px-100 rounded-2xl shadow-2xl">
        <div>Result</div>
        <div>
          <button
          className="border rounded-2xl py-2 px-6 bg-blue-800 text-white hover:bg-blue-900 duration-300"
          onClick={() => handleNavigation()}
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  )
}
