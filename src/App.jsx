import { useState, useRef, useEffect } from 'react'
import { FaPlay, FaForwardStep, FaBackwardStep,FaPause} from "react-icons/fa6";
import MusicItemNormal from './components/MusicItemNormal'
import MusicItemHover from './components/MusicItemHover'

const App = () => {

  const audioRef = useRef()
   
  const [iconPlay, setIconPlay] = useState('block')
  const [iconPause, setIconPause] = useState('none')
  const [listItems, setListItems] = useState([])
  const [ itemNormal, setItemNormal ] = useState('block')
  const [ itemHover, setItemHover ] = useState('none')
  


|
  useEffect(()=>{
    fetch("https://playground.4geeks.com//apis/fake/sound/songs")
    .then((response)=>{return response.json()})
    .then((data)=>{setListItems(data)})
    .catch((error)=>{console.log('Hubo un error')})
  },[])

/*   useEffect(()=>{
      setTimeout(() => {        
        setSongTime(audioRef.current.duration)
        console.log(audioRef.current.currentTime)
        console.log(audioRef.current.duration)
      }, 2000);
   
  },[]) */

  const reproducirCancion = () => {
    setIconPause('block')
    setIconPlay('none')
    // audioRef.current.play()
  }
  const pausarCancion = () => {
    setIconPause('none')
    setIconPlay('block')
    // audioRef.current.pause()
  }

  const normalState = () =>{
    setItemNormal('none')
    setItemHover('block')
  }

  const hoverState = () =>{
    setItemNormal('block')
    setItemHover('none')
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
                    {listItems.length > 0 ? listItems.map((item, index)=>{
                      
                      return
                      
                      {console.log(item), console.log(index)}
                      <>
                      <MusicItemNormal itemDisplayNormal={itemNormal} hover={()=>{normalState()}} key={index} value={item}/>
                      <MusicItemHover itemDisplayHover={itemHover} normal={()=>{hoverState()}} key={index} value={item}/>
                      </>
                      
                      
                      }): 'tu lista esta vacia'}

                </ul>
            </div>

            </div>

      </div>
    </>
  );
};

export default App;
