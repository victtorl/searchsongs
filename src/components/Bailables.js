import React from 'react'
import {connect} from 'react-redux'

const Bailables=({bailables,quitardeBailables,enviarDatos})=>(
    <section>
        <h6 className="title_music">Bailables</h6>
        <div className="contenedor-musicas">

                {
                    bailables.map(m =>(
                            <article className="bailable" key={m.id}>
                             <button type="button"  className="list-group-item list-group-item-action active" aria-current="true" onClick={()=>{enviarDatos(m)}}>
                                    {m.artist.name}--{m.title}
                                </button>
                                <div>
                             <button type="button" className="btn btn-danger" onClick={()=>quitardeBailables(m)}>delete bailables</button>
                                </div>
                            </article>
                            ) 
                    )
                }
        </div>
    </section>
)
const mapStateToProps = state=>({
    bailables:state.bailables
})

const mapDispatchToProps =dispatch=>({
    quitardeBailables(musica){
        dispatch({
            type:'QUITAR_DE_BAILABLES',
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

export default connect(mapStateToProps,mapDispatchToProps)(Bailables)