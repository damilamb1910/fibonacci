import React from 'react'
import HashLoader from "react-spinners/HashLoader";
import './loading.css'

const Loading = ({loading}) => {
  return (
    <>
   
    <div className={loading ? 'loading__container' : 'loading__none'}>
      <HashLoader
        color={"#FF6F00"} loading={loading} size={40}
        
/>
    </div>
    </>
    
    
    
  )
}

export default Loading
