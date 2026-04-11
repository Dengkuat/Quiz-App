import { useNavigate} from "react-router-dom"
import { useTheme } from "../Context/ThemeContext";

export default function UserInstruction() {
  const navigate = useNavigate();
  const {toggleTheme, darkMode} = useTheme()

  const handleNavigation = () => {
    navigate("/QuestionTemplate/1")
  }
  return (
    <div className={
      darkMode?
      'bg-black text-white duration-500'
      :
      'text-black bg-white duration-500'
    }>
      <button onClick={toggleTheme}>Light/Dark</button>
    <div className="h-screen flex justify-center items-center">
      <div className="border py-30 px-20 rounded-2xl shadow-2xl space-y-10">
        <div className="space-y-4">
          <h1 className="text-center pb-7 font-bold text-4xl">Welcome to the Quiz App</h1>
          <h2 className="text-center pb-7 font-bold text-2xl">Before you begin, please read the instructions carefully:</h2>
          <p>	1.	This quiz contains 10 questions in total.
          You will answer them one by one.</p>
          <p>3.	When you select an option, the app will immediately show you the correct answer.
          Your score will also update automatically based on your selection.</p>
          <p>	4.	You cannot change your answer once it has been selected, so choose carefully.</p>
          <p>	5.	After answering a question, click the “Next” button to move to the next question.</p>
          <p>	6.	Your progress will be tracked throughout the quiz, and your final score will be shown at the end.</p>
        </div>

        <div className="flex justify-center items-center">
          <button
          className="border rounded-2xl py-2 px-6 bg-blue-800 text-white hover:bg-blue-900 duration-300"
          onClick={() => handleNavigation()}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}