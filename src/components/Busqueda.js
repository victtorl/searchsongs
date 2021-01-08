import React, {  useState } from 'react'
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';


const Ingreso=({llenararray})=>{
    const [datos,setVal]=useState({
        ingreso:''
    })
   
    const capturarInput=(e)=> {
        console.log(e.target.value)
       setVal({
           ...datos,
           [e.target.name]:e.target.value,
       })
          
    }

    const enviarDatos=(e)=>{
            e.preventDefault();
            llenararray(datos)   
    }
   

return(
     <section>
        <form onSubmit={enviarDatos} className="form-label">
        <input  type="text" name="nombre" onChange={capturarInput} className="form-control" placeholder="search music"></input>
           
             

        </form>

    </section>
)
}


const mapStateToProps = state=>({
    query:state.query

})

const mapDispatchToProps =dispatch=>({

    llenararray(datos){
        
        fetch(`https://rapidapi.p.rapidapi.com/search?q=${datos.nombre}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "b4468d6023msh4b72268c0c00d0fp1c7322jsned3499584d20"
            }
        })
            .then(response => response.json())
            .then(algo => dispatch({
                type:'LLENAR_MUSICA',
                payload:algo.data
            })).then(algo=>console.log(algo))
            .catch(err => {
                console.error(err);
            });
        
        
    }
  

})

export default connect(mapStateToProps,mapDispatchToProps)(Ingreso)