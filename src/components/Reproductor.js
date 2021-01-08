import React, { Fragment }  from 'react'
import {connect} from 'react-redux'



//aca quiero recibir los datos del api enviados desde el boton enviar de musica




const Reproductor=({musicaselect})=>{


   return(  
            <Fragment>
                <h6>{musicaselect.title}</h6>
                <audio className="audio" src={musicaselect.preview} type="audio/mp3" controls />
            </Fragment>
         )
}


const mapStateToProps = state=>({
    musicaselect:state.musicaselect

})



export default  connect(mapStateToProps,{})( Reproductor);
