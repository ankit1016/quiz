import React from 'react'
import { useNavigate } from 'react-router'

const NotFound = () => {
    const navigate=useNavigate()
    const back=()=>{
        navigate("/")
    }
  return (
    <>
    <div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
    <div style={{marginBottom:"1rem"}}>Page Not Found </div>
    <div style={{border:"1px solid black",width:"fit-content",padding:"0.5rem",borderRadius:"1rem",cursor:"pointer"}} onClick={back}> Back To Home Page</div>
    </div>
    </>
  )
}

export default NotFound