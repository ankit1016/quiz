import React,{useEffect} from 'react'
import styles from "./result.module.css"
import {Link, useLocation, useNavigate} from "react-router-dom"
const Result = () => {
  const {state}=useLocation()
  const navigate=useNavigate()


  useEffect(() => {
    if(!state){
      navigate("/")   
    }
  }, [])
  return (
    state?<div className={styles.main_div}>
     <Link to="/"> <div className={styles.cancle}><i className="fa fa-times" aria-hidden="true"/></div></Link>
      <div className={styles.message}><p>Congrats!</p></div>
      <div className={styles.title}><p>Your Score</p></div>
      <div className={styles.score_card}>
        <div className={styles.score}>{state.answerCount}/10</div>
        <div className={styles.reward}>
          <img src={require("../../asset/reward.png")} alt="reward_image" width={"100vw"}/><span>+{state.answerCount*10} points</span>
        </div>
      </div>
      <div className={styles.win_img}>
        <img src={require("../../asset/win_trophy.png")} width={"100vw"} />
      </div>
     <Link to='/'> <div className={styles.button}>
        <button type='button'>Play Again</button>
      </div>
      </Link>
    </div>:<>invalid</>
  )
}

export default Result