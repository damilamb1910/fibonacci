import React from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import './loading.css'

const Loading = ({loading}) => {
  return (
    <>
   
    <div className={loading ? 'loading__container' : 'loading__none'}>
      <ClimbingBoxLoader
        color={"#0446F1"} loading={loading} size={40}
        
/>
    </div>
    </>
    
    
    
  )
}

export default Loading
