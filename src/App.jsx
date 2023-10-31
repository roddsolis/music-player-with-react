import { useState, useRef, useEffect } from 'react'
import { FaPlay, FaForwardStep, FaBackwardStep,FaPause} from "react-icons/fa6";

const App = () => {
   
  const [iconPlay, setIconPlay] = useState('block')
  const [iconPause, setIconPause] = useState('none')
  const [listItems, setListItems] = useState([])
  const [ number, setNumber] = useState('block')
  const [ playIcon, setPlayIcon] = useState('none')

  fetch("https://playground.4geeks.com//apis/fake/sound/songs")
  .then((response)=>{
      return response.json()
  })
  .then((data)=>{
      setListItems(data)
      
  })
  .catch((error)=>{
      console.log('Hubo un error')

  })


  const reproducirCancion = () => {
    setIconPause('block')
    setIconPlay('none')
  }
  const pausarCancion = () => {
    setIconPause('none')
    setIconPlay('block')
  }



  return (
    <>
      <div className="contenedorReproductor">

            <div className="controlesDelReproductor">
          
            <div className='controls'>
              <div className="iconWrapper">
              <FaBackwardStep style={{fontSize:"24px"}}/>
              </div> 
            <div className="iconWrapper">
            <FaPlay onClick={()=>{reproducirCancion()}} style={{display:iconPlay}}/>
            <FaPause onClick={()=>{pausarCancion()}} style={{display:iconPause}}/>
            </div> 
              <div className="iconWrapper">
              <FaForwardStep style={{fontSize:"24px"}}/>
              </div> 
            </div>

            </div>
            
            <div className="overflowList">

            <div className="containerList">
                <ul>
                      { 
                        listItems.length > 0 ? listItems.map((item, i)=>{
                        return <li key={i} onMouseEnter={()=>{setPlayIcon('block'),setNumber('none')}} onMouseLeave={()=>{setPlayIcon('none'),setNumber('block')}} >
                            <div style={{display:playIcon}}> <div className="playIconContainer" >▶</div>  </div>
                            <div className="itemInfo"> 
                            <div style={{display:number}}> <div className='numberContainer'>{i + 1}</div></div> 
                            <div>{item.name.charAt(0).toUpperCase()+item.name.slice(1)}</div> 
                            </div>  
                            <p>0:00</p>
                            </li> }) 
                        : 
                        "tu lista esta vacia" 
                      }
                </ul>
            </div>

            </div>

      </div>
    </>
  );
};

export default App;


/* { 
  listItems.length > 0 ? listItems.map((item, i)=>{
  return <li key={i} onMouseEnter={()=>{setPlayIcon('block'),setNumber('none')}} onMouseLeave={()=>{setPlayIcon('none'),setNumber('block')}} >
      <div style={{display:playIcon}} > <div className="playIconContainer" > <FaPlay onClick={()=>{audioRef.current.play()}}/></div> </div>
      <div className="itemInfo"> 
      <div style={{display:number}}> <div className='numberContainer'>{item.id}</div></div> 
      <div>{item.name.charAt(0).toUpperCase()+item.name.slice(1)}</div> 
      </div>
      <audio src={"https://playground.4geeks.com/apis/fake/sound/"+item.url}  ref={audioRef} controls ></audio> 

      <p>00:00</p>
      </li> }) 
  : 
  "tu lista esta vacia" 
} */


