import React,{useEffect,useRef,useState} from 'react'

const ProgressBar = () => {
   const divRef=useRef(null)
   const [width,setWidth]=useState(1)

    function animateProgressBar(){
        let scrollDistance = -window.document.body.getBoundingClientRect().top
        let progressWidth=(scrollDistance/(window.document.body.getBoundingClientRect().height-window.document.documentElement.clientHeight))*100
        let widthValue=Math.floor(progressWidth)
         setWidth(widthValue)
        // if(divRef.current){
        //   divRef.current.style.width = (widthValue+1) + '%'
        // }
       console.log(width)
    }
  

    useEffect(() => {
        window.addEventListener("scroll", animateProgressBar);
      },[]);


    return (
    <>
      <div className="h-2 fixed z-50 top-0 left-0  duration-150 transition ease-out rounded-xl gradient-1" ref={divRef}
      style={{width:`${width+1}%`}}>
      </div>
    </>
  )
}

export default ProgressBar
