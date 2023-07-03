
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {action,Originals,horror,romance} from './urls'
import './App.css'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <RowPost url={Originals} title='Netflix Originals' />
     <RowPost url={action} title='Action' isSmall />
     <RowPost url={horror} title='Horror' isSmall />
     <RowPost url={romance} title='Romance' isSmall />
 
     

    </div>
  );
}

export default App;
