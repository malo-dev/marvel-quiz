import React,{useRef,useEffect,useState,Fragment} from 'react'
import { Link } from 'react-router-dom'


const Landing = () => {


  const [btn,setBtn] = useState(false)
  console.log(btn)

const refWolverine = useRef(null)

useEffect(()=>{
    refWolverine.current.classList.add("startingImg")
    setTimeout(()=>{
      refWolverine.current.classList.remove("startingImg")
      setBtn(true)
    },1000);
},[])

 const setLeftImg=()=>{
  console.log('fff')
  refWolverine.current.classList.add("leftImg")
 }
 const UnsetLeftImg=()=>{
  refWolverine.current.classList.remove("leftImg")
 }
const setRightImg=()=>{
  refWolverine.current.classList.add("rightImg")
}
const UnsetRightImg=()=>{
  refWolverine.current.classList.remove("rightImg")
}
const displayBtn= btn && (
    <Fragment>
        <div className="leftBox" onMouseOver={setLeftImg} onMouseOut={UnsetLeftImg}>
             <Link to="signup" className='btn-welcome'>Inscription</Link>
        </div>
        <div className="rightBox">
             <Link  to="login" className='btn-welcome' onMouseOver={setRightImg} onMouseOut={UnsetRightImg}>Connexion</Link>
       </div>
    </Fragment>


)

  return (
    <main  ref={refWolverine} className='welcomePage'>
          {displayBtn}
    </main>
  )
}

export default Landing
