import React, { Component } from 'react';
import './App.css';

import Navigation from './Components/navigation';
import ResponsivePlayer from './Components/video';
import Main from './Components/main';
import Footer from './Components/footer';

class App extends Component {
  render() {
    return (
<div>
      <div>
        <Navigation className="navbar"/>
     </div>

      <div>
        <ResponsivePlayer className="player-wrapper"/>
     </div>

     <div>
       <Main className="columns"/>
     </div>

     <div>
      <Footer className="page-footer font-small blue"/>
     </div>

</div>
    );
  }
}

export default App;
