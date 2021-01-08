import React from 'react'
import {connect} from 'react-redux'

const Bilboards=({bilboard,quitarBilboard,enviarDatos})=>(
    <section>
        <h6 className="title_music">Bilboards</h6>
        <div className="contenedor-musicas">

                {
                    bilboard.map(m =>(
                            <article className="bilboards" key={m.id}>
                                 <button type="button"  className="list-group-item list-group-item-action active" aria-current="true" onClick={()=>{enviarDatos(m)}}>
                                    {m.artist.name}--{m.title}
                                </button>
                                 
                                <div>
                                 <button type="button" className="btn btn-danger" onClick={()=>quitarBilboard(m)}>delete bilboards</button>
                                </div>
                            </article>
                            ) 
                    )
                }
        </div>
    </section>
)
const mapStateToProps = state=>({
    bilboard:state.bilboard
})

const mapDispatchToProps =dispatch=>({
  quitarBilboard(music){
      dispatch({
          type:'QUITAR_BILBOARD',
          music
      })

  },
  enviarDatos(m){
      dispatch({
          type:'ADD_MUSIC_ACTUAL',
          payload:m
      })
  }

       
})

export default connect(mapStateToProps,mapDispatchToProps)(Bilboards)