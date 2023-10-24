import { useState } from 'react'

const App = () => {
 

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



  return (
    <>
      <div className="contenedorReproductor">
            <div className="controlesDelReproductor">controles</div>
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
