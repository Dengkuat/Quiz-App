import { createContext, useState, type ReactNode } from "react";

interface ResultContextInterface {
  result:number;
  setResult:React.Dispatch<React.SetStateAction<number>>
}

interface childrenInterface{
  children:ReactNode
}

export const ResultContext = createContext<ResultContextInterface|null>(null)

export const ResultProvider = ({children}:childrenInterface) => {
  const [result, setResult] = useState<number>(0)
  return(
    <ResultContext.Provider value={{result, setResult}}>
      {children}
    </ResultContext.Provider>
  )
}