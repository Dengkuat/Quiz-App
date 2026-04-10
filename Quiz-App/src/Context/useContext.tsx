import { useContext } from "react"
import { ResultContext} from "./Context"

export const useResult = () => {
  const context = useContext(ResultContext)

  if(!context) throw new Error(`Cannot use context outside the provider`)
    return context
}