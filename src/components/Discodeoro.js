import React from 'react'
import {connect} from 'react-redux'

const Discodeoro=({discodeoro,eliminarDiscodOro,enviarDatos})=>(
    <section>
        <h6 className="title_music">Discodeoro</h6>
        <div className="contenedor-musicas">

                {
                    discodeoro.map(m =>(
                            <article className="discodeoro" key={m.id}>
                                <button type="button"  className="list-group-item list-group-item-action active" aria-current="true" onClick={()=>{enviarDatos(m)}}>
                                    {m.artist.name}--{m.title}
                                </button>
                                 
                                <div>
                                    <button type="button" className="btn btn-danger" onClick={()=>eliminarDiscodOro(m)}>delete discodeoro</button>
                                </div>
                            </article>
                            ) 
                    )
                }
        </div>
    </section>
)
const mapStateToProps = state=>({
    discodeoro:state.discodeoro
})

const mapDispatchToProps =dispatch=>({
    eliminarDiscodOro(musica){
        dispatch({
            type:'QUITAR_DISCO_DE_ORO',
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

export default connect(mapStateToProps,mapDispatchToProps)(Discodeoro)