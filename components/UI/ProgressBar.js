import React,{useEffect,useRef,useState} from 'react'

const ProgressBar = () => {
   const divRef=useRef(null)
   const [width,setWidth]=useState(0)

    function animateProgressBar(){
        const winScroll=document.documentElement.scrollTop
        const height=document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled=(winScroll / height) * 100
        setWidth(scrolled)
    }
    
    useEffect(() => {
        window.addEventListener("scroll", animateProgressBar);
    },[]);
  
  return (
    <>
      <div className="h-[6px] fixed z-50 bottom-0 left-0 transition gradient-1" ref={divRef}
      style={{width:`${width}%`}}>
      </div>
    </>
  )
}

export default ProgressBar
