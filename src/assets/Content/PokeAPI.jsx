// generar funcion asinc 
import { useEffect, useState } from "react"

// generar funcion 
function Poke () {
// use estate
  const [data, SetData] = useState([])

  useEffect( () => {
    const Pagina = "https://pokeapi.co/api/v2/pokemon/ditto"
    // funcion flecha asincrona 
    async function fecthBack() {
      const response = await fetch(Pagina)
      const data = await response.json()
      console.log(data)
      SetData(data)
    }
    fecthBack()
  },[])  

  // aca pongo elementos HTML jsx
  return (
      <>
      


      </>
  )

}
export default Poke