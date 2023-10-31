import { FaPlay, FaForwardStep, FaBackwardStep,FaPause} from "react-icons/fa6";
import { useState, useRef, useEffect } from 'react'

const MusicItemHover = ({itemDisplayHover, normal, key, value}) => {

  const [iconPlay, setIconPlay] = useState('block')
  const [iconPause, setIconPause] = useState('none')

  
  const reproducirCancion = () => {
    setIconPause('block')
    setIconPlay('none')
  }

  const pausarCancion = () => {
    setIconPause('none')
    setIconPlay('block')
  }



  console.log(key)
  console.log(value)

  return (

    <> 

            

            <li style={{display: itemDisplayHover}} onMouseLeave={normal}>

              <div className='listItemWrapper2' >
                <div className="itemInfo">
                <div className="playIconContainer">
                    <FaPlay onClick={()=>{reproducirCancion()}} style={{display:iconPlay}}/>
                    <FaPause onClick={()=>{pausarCancion()}} style={{display:iconPause}}/>
                </div>
                <div>Ready to go</div>
                </div>  

              <p>5:02</p>
              </div>
            </li>
                
                
                


            
    </>
  )
}

export default MusicItemHover
