import {createStore} from 'redux'



const initialState={
    musica:[],
    bailables:[],
    discodeoro:[],
    bilboard:[],
    musicaselect:[]
}

const reducerAdmin =(state=initialState,action)=>{
switch(action.type){
    case 'ADD_BAILABLES':
        return{
            ...state,
            bailables:state.bailables.concat(action.musica),
            musica:state.musica.filter(e=>e.id!==action.musica.id)
            
        }
    case 'ADD_DISCO_DE_ORO':
            return{
            ...state,
            discodeoro:state.discodeoro.concat(action.musica),
            musica:state.musica.filter(e=>e.id!==action.musica.id)
            }  
    case 'ADD_BILBOARDS':
        return{
            ...state,
            bilboard:state.bilboard.concat(action.musica),
            musica:state.musica.filter(m=>m.id !== action.musica.id)
        }
    case 'QUITAR_BILBOARD':
        return{
            ...state,
            musica:state.musica.concat(action.music),
            bilboard:state.bilboard.filter(m => m.id !== action.music.id)
         
        }
    case  'QUITAR_DISCO_DE_ORO':
        return{
            ...state,
            musica:state.musica.concat(action.musica),
            discodeoro:state.discodeoro.filter(m =>m.id!==action.musica.id)
        } 
    case  'QUITAR_DE_BAILABLES':
        return{
            ...state,
            musica:state.musica.concat(action.musica),
            bailables:state.bailables.filter(m=>m.id!==action.musica.id)
        }
    case 'LLENAR_MUSICA':
        return{
            ...state,
            musica:action.payload
        }
    case 'ADD_MUSIC_ACTUAL':
        return{
            ...state,
            musicaselect:action.payload
        }            
                   
    default:
        return state  
    
}
}




//acciones


export default createStore(reducerAdmin,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())