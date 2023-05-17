import React,{useEffect,useState}from 'react'
import styles from "./rule.module.css"
import { useLocation, useNavigate,} from 'react-router'
import {Link} from "react-router-dom"
import useAxios from '../../customHook/useAxios'
import Loader from '../../component/loader'


const QuizRule = () => {
 const[loader,setLoader]=useState(false)
  const {state}=useLocation()


  const navigate = useNavigate();
    const Axios=useAxios()
    useEffect(() => {
      if(!state){
        navigate("/")   
      }
    }, [])

   

interface QuizAppResponse{
  results:any[]
}

    const handlePlay=()=>{
      setLoader(true)
      Axios.get<QuizAppResponse>(`?amount=10&type=multiple&category=${state.id}`).then((res)=>{
        navigate("/play",{state:{data:res.data.results}})
        setLoader(false)
      }).catch((error)=>{
        setLoader(false)
        console.log("error",error)
      })
    }

  return (
    state?<div className={styles.main_div}>
        <div className={styles.back_div}>
       <Link to="/"> <div className={styles.arrow}><i className="fa fa-arrow-left" aria-hidden="true"></i></div></Link>
        <div className={styles.name}>{state.name}</div>
        </div>

      <div className={styles.img_div} >
      <img src={require(`../../asset/${state.img_url}`)} />
      </div>
       <h2 className={styles.title}>{state.title}</h2>
       <div className={styles.rule_icon_div}>
        <div>
            <div>
                <img src={require("../../asset/question_img.png")} alt="question_icon"width={"100vw"}  />
            </div>
            <p>10 Questions</p>
        </div>
      
        <div>
            <div><img src={require("../../asset/reward.png")} alt="points_icon"  width={"100vw"}/></div>
              <p>+100 points</p>
        </div>

        <div > 
      
             <div >
             <img src={require("../../asset/timer.png")} alt="timer_icon" width={"100px"} height={"100px"}/>
            </div>
            <p>1 minute</p>
        </div>
       </div>
     <p className={styles.description}> Become the best and fastest player of <br/>
     {state.name}<br/><br/>
     This quiz is about {state.title}  <br/>
     Challenge yourself <br/>
     All the Best <i className="fa fa-thumbs-up" aria-hidden="true"></i>
     </p>
    <div className={styles.button_div}>
    {loader?<Loader/>:<button type='button' className={styles.play_button} onClick={handlePlay}>Play </button>}
     </div>
    </div>:<>invalid path</>
  )
}

export default QuizRule