import React from 'react';
import {Provider} from "react-redux"
import Bailables from './components/Bailables';
import Bilboards from './components/Bilboards';
import Discodeoro from './components/Discodeoro';
import Musica from './components/Musica';
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import Busqueda from './components/Busqueda';
import Reproductor from './components/Reproductor';


const App =()=>(
  <Provider store={store}>
      <main className='maincontainer'>
      

      <div className="container todo ">
        <div className="row">
        <h1 className="title-principal">Escuche un fragmento de su musica favorita en calidad HQ</h1>
        <Busqueda/>
        <Reproductor/>
        </div>
        <br></br>
        <div className="row">
          <div className="col-md-3 col-sm-3">
            <Musica/>
          </div>
          <div className="col-md-3 col-sm-3">
            <Bailables/>
          </div>
          <div className="col-md-3 col-sm-3">
            <Discodeoro/>
          </div>
          <div className="col-md-3 col-sm-3">
            <Bilboards/>
          </div>
          
        </div>
      </div>
      </main>
  </Provider>
)

export default App;
