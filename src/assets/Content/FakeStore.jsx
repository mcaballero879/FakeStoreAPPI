// crear funcion 
import { useEffect,useState } from "react";

function FakeStoreAPP (){
    // estado inicial
    const [data, SetData] = useState([]) 
    
    useEffect( () => {
        const Pagina = "https://fakestoreapi.com/products/"
        // funcion flecha asincrona 
        async function fecthBack() {
          const response = await fetch(Pagina)
          const data = await response.json()
          console.log(data)
          SetData(data)
        }
        fecthBack()
      },[]) 

      return(
        <>
        <p>Aca va el articulo 1 {data.title} </p>
        <p>Aca va el precio {data.price}</p>
        </>

      ) 

}

export default FakeStoreAPP