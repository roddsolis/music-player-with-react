import { FaPlay, FaForwardStep, FaBackwardStep,FaPause} from "react-icons/fa6";
import { useState, useRef, useEffect } from 'react'



const MusicItemNormal = ({itemDisplayNormal, hover, key, value}) => {


  const [ number, setNumber] = useState('block')
  const [ icon, setIcon] = useState('none')


  sole.log(key)
  console.log(value)

 
  return (
          <>  
            
            
            <li style={{display: itemDisplayNormal}} onMouseEnter={hover}>

            <div className='listItemWrapper1' >
              <div className="itemInfo">
                <div >

                  <div style={{display:number}} className='numberContainer'><p>{value.id}</p></div>
                  <iframe src="https://lottie.host/?file=7ff503e3-d661-475b-83ff-8e17ce6c0a5f/TCzcA2S8qn.json" className='waveIcon' style={{display:icon}}></iframe>
                  
                </div>

              <div>Ready to go</div>
              </div>  
              <p>5:02</p>                     
           
              </div>                
              
          </li>
          
      
          </>
  )
}

export default MusicItemNormal
