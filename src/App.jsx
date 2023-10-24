import { useState } from 'react'

const App = () => {
 

    const [listItems, setListItems] = useState([])
    

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
            <div className="containerList">
                <ul>
                    { 
                        listItems.length > 0 ? listItems.map((item, i)=>{
                        return <li key={i}> <div className="itemInfo"> <p> {i + 1} </p> <p>{item.name.charAt(0).toUpperCase()+item.name.slice(1)} </p> </div> <div className="playSong">▶</div> </li> }) 
                        : 
                        "tu lista esta vacia" 
                    }
                </ul>
            </div>
      </div>
    </>
  );
};

export default App;
