import React,{useState,useEffect} from 'react'
import styles from "./question.module.css"
import { useLocation, useNavigate} from "react-router-dom"

const Questions = () => {
   const {state}=useLocation();
   const data=state?state.data:[]
   const [count,setCount]=useState(0)
   const [time,setTime]=useState(60)
   const [options,setOptions]=useState<any[]>([])
   const [correctCount,setCorrectCount]=useState(0)
   const [optionIndex,setOptionIndex]=useState(-1)
   const [isCorrect,setIsCorrect]=useState<any>("")

  const navigate=useNavigate()

   useEffect(()=>{
    if(time)setTimeout(()=>{setTime((pre)=>pre-1)},1000)
    else navigate("/result",{state:{answerCount:correctCount}})
  },[time])
   
  useEffect(() => {
    if(!state){
      navigate("/")   
    }
  }, [])

    useEffect(()=>{
      if(state){
      const options=shuffle([data[count].correct_answer, ...data[count].incorrect_answers]);
      setOptions(options)
      setIsCorrect("")
      setOptionIndex(-1)
      }
    },[count])
   

   const handleNext=()=>{
  setCount((pre)=>pre+1)
  if(count>8) navigate("/result",{state:{answerCount:correctCount}})
   }

   const shuffle = (array:any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  const checkAnswer=(option:string,index:number)=>{
        setOptionIndex(index)
           if(option===data[count].correct_answer){ 
            setCorrectCount((pre)=>pre+1)
            setIsCorrect(styles.correct)
          }
          else{
            setIsCorrect(styles.wrong)
          }
  }
 
  const simpleString=(str:string)=>{
   return parser.parseFromString(`<!doctype html><body>${str}`, 'text/html').body.textContent;
  }

  const parser=new DOMParser()
  const decodedQuestion = state?simpleString(data[count].question):""
   
  return (
   state? <div className={styles.main_div}>
    <div className={styles.timer}><img src={require("../../asset/timer.png")} />{time}</div>
     <div className={styles.count}><p> Question {count+1} out of 10 </p></div>
    <div className={styles.question}> <p> {decodedQuestion}  </p></div>
    <div className={styles.options} >
      {options.map((option:string,index:number)=>(
        <div key={index} onClick={()=>!isCorrect && checkAnswer(option,index)} className={index===optionIndex?isCorrect:""} >{simpleString(option)}</div>
      ))}
    </div>
   <div className={styles.next} onClick={handleNext}>Continue</div>
  
      </div>:<>invalid</>
    
  )
}

export default Questions