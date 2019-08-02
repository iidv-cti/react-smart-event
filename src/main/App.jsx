import React from 'react'
import Routers from './Routers'
import {BrowserRouter} from 'react-router-dom'
//um jeito mais compacto
export default props=>{
  return (
      <BrowserRouter>
    <div className="App">
        <Routers></Routers>
    </div>
    </BrowserRouter>
  );
}

