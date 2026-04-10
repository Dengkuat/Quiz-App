import { questions } from "../components/Questions"
import { useParams, useNavigate } from "react-router-dom"

// interface questionAndOptionInterface {
//   id:number;
//   question:string;
//   options:string[]
// }

export const QuestionTemplate = () => {
  const {id} = useParams();
  const navigation = useNavigate()

  const handleNavigation = () => {
    if(Number(id)+1 <= 10){
      return navigation(`/QuestionTemplate/${Number(id)+1}`)
    }
    return navigation(`/result`)
  }
  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <div className="border py-40 px-100 rounded-2xl shadow-2xl">
          <h1>The id of here is {Number(id)+ 1}</h1>

          <div>
            <button 
            className="border rounded-2xl px-9 py-2"
            onClick={() => handleNavigation()}
            >
              Next Question
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
