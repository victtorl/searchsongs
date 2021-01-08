import React, { useState }  from 'react'
import {connect} from 'react-redux'

import '../App.css'




const Musica=({musica,agregarBailable,agregaDiscodeOro,agregaBilboard,enviarDatos})=>{

    //puedo usar este codigo para usar propiedades del componete fuera del componente :D
    // const [datamusictoreproductor,setDatamusictoReproductor]=useState({
    //     titulo:'',
    //     artista:'',
    //     audio:''
    // })
    //aca llenamos la data para qeu viaje a datamusic-> correcto 
//  const enviarAlReproductor=(m)=>{
//      setDatamusictoReproductor({
//          ...datamusictoreproductor,
//         titulo:m.title,
//         artista:m.artist.name,
//         audio:m.preview
//      })
//  }
 
return(

    <div>
     
     <section>
        
     <h6 className="title_music">General</h6>
     <div className="contenedor-musicas">
             {
                 musica.map(m =>(  
                         <article className="musica" key={m.id}> 
                             <div className="list-group">
                            <button type="button"  className="list-group-item list-group-item-action active" aria-current="true" onClick={()=>{enviarDatos(m)}}>
                                    {m.artist.name}--{m.title}
                                    </button>
                             </div>
                             <div>
                                 <button type="button" className="btn btn-success" onClick={()=>agregarBailable(m)} >bailables</button>
                                 <button type="button" className="btn btn-success" onClick={()=>agregaDiscodeOro(m)} >discodeoro</button>
                                 <button type="button" className="btn btn-success" onClick={()=>agregaBilboard(m)} >bilboards</button>
                             </div>
                         </article>
                         ) 
                 )
             
             }
     </div>
 </section>
 </div>
)
}



const mapStateToProps = state=>({
    musica:state.musica

})

const mapDispatchToProps =dispatch=>({
    agregarBailable(musica){
        dispatch({
            type:"ADD_BAILABLES",
            musica
        })
    },
    agregaDiscodeOro(musica){
        dispatch({
            type:'ADD_DISCO_DE_ORO',
            musica
        })
    },
    agregaBilboard(musica){
        dispatch({
            type:'ADD_BILBOARDS',
            musica
        })
    },
    enviarDatos(m){
        dispatch({
            type:'ADD_MUSIC_ACTUAL',
            payload:m
        })
    }
 

})

export default  connect(mapStateToProps,mapDispatchToProps)( Musica);
