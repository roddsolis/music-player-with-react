import { useState, useRef, useEffect } from 'react'
import { FaPlay, FaForwardStep, FaBackwardStep,FaPause} from "react-icons/fa6";

const App = () => {
 
  
  const [listItems, setListItems] = useState([])
  const [ number, setNumber] = useState('block')
  const [ playIcon, setPlayIcon] = useState('none')
  
  let audioRef = useRef()

    /* este fetch consulta la lista de canciones https://playground.4geeks.com/apis/fake/sound/files/mario/songs/castle.mp3 */
    
    useEffect(()=>{
      fetch("https://playground.4geeks.com//apis/fake/sound/songs")
      .then((response)=>{return response.json()})
      .then((data)=>{
        setListItems(data) 
      })
      .catch((error)=>{console.log('Hubo un error')})
    },[])

  return (
    <>
      <div className="contenedorReproductor">
            <div className="controlesDelReproductor">
              <img src="http://picsum.photos/72/72" alt="" />
              <div className='controls'>  <FaBackwardStep/><div onClick={()=>{}}> <FaPlay onClick={()=>{audioRef.current.play()}}/>  <FaPause onClick={()=>{audioRef.current.pause()}}/> </div><FaForwardStep/></div>
            </div>
            <div className="overflowList">
            <div className="containerList">
                <ul>
                    { 
                        listItems.length > 0 ? listItems.map((item, i)=>{
                        return <li key={i} onMouseEnter={()=>{setPlayIcon('block'),setNumber('none')}} onMouseLeave={()=>{setPlayIcon('none'),setNumber('block')}} >
                            <div style={{display:playIcon}} > <div className="playIconContainer" > <FaPlay onClick={()=>{audioRef.current.play()}}/></div> </div>
                            <div className="itemInfo"> 
                            <div style={{display:number}}> <div className='numberContainer'>{item.id}</div></div> 
                            <div>{item.name.charAt(0).toUpperCase()+item.name.slice(1)}</div> 
                            </div>
                            <audio src={"https://playground.4geeks.com/apis/fake/sound/"+item.url}  ref={audioRef} ></audio> 

                            <p>00:00</p>
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
