import React from "react";
import Wines from "../containers/Wines";
import '../containers/Wines.css';


class wineIndex extends React.Component {

   render(){
    return (
        <div className = 'maipn'>
            <br />
            <br />
         <Wines />

        </div>

    )
  }

}

export default wineIndex;