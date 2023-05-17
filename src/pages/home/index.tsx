import React from 'react'
import style from "./home.module.css"
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div className={style.home_div}>
     <div className={style.center}>
      <p >Welcome To Daily Quiz</p>
      <h2>Let's Play!</h2>
      </div>
      <h4 className={style.quiz_title}>Quiz of the Day</h4>
      <div className={style.daily_quiz_div}>
          <div className={style.header_div}>
            <p className={style.header_name}>Science & Nature</p>
            <p className={style.count}>1997 players worldwide</p>
           <Link to="/rule" state={{id:"17",name:"Quiz of the Day",title:"Science & Nature",img_url:"science_img.png"}}> <button type='button' className={style.play_button}>Play Now!</button></Link>
         </div>
         <div className={`${style.daily_quiz_img}`}>
         <img src={require("../../asset/science_img.png")} width={"100%"} height={"100%"}/>
         </div>
      </div>
       <h4 className={`${style.quiz_title} ${style.cat_title}`}>Categories</h4>
       <div className={style.categories}>
       <Link to="/rule" state={{id:"12",name:"Music Quiz",title:"music",img_url:"music_img.png"}}> 
       <div className={style.categories_div}>
            <div className={style.music_div}>
                <img src={require("../../asset/music_img.png")} width={"100vw"}/>
            </div>
            <p>Music</p>
        </div>
        </Link>

       <Link to="/rule" state={{id:"21",name:"Sport Quiz",title:"sport",img_url:"sport_img.png"}}>
        <div className={style.categories_div}>
            <div className={`${style.sport_div}`}>
            <img src={require("../../asset/sport_img.png")} width={"100vw"}/>
            </div>
           <p> Sport</p>
        </div>
        </Link>

        <Link to="/rule" state={{id:"9",name:"General Knowledge quiz",title:"general knowledge",img_url:"gk_img.png"}}>
        <div className={style.categories_div}>
            <div className={`${style.design_div}`}>
            <img src={require("../../asset/gk_img.png")} width={"100vw"}/>
            </div>
           <p> General Knowledge</p>
        </div>
        </Link>
        <Link to="/rule" state={{id:"27",name:"Animals Quiz",title:"animals",img_url:"animal_img.png"}}>
        <div className={style.categories_div}>
            <div className={`${style.animals_div}`}>
            <img src={require("../../asset/animal_img.png")} width={"100vw"}/>
            </div>
             <p> Animals</p>
            </div>
        </Link>
       </div>
     
    </div>

  )
}

export default Home