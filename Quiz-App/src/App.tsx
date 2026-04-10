import { QuestionTemplate } from "./Pages/QuestionTemplate"
import UserInstruction from "./Pages/Instruction"
import { Routes, Route } from "react-router-dom"
import Result from "./Pages/Result"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<UserInstruction/>}/>
      <Route path="/QuestionTemplate/:id" element={<QuestionTemplate/>}/>
      <Route path="/result" element={<Result/>}/>
    </Routes>

  )
}
