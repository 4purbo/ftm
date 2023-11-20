// File name: App.js
// Description: Contains the App component that includes all the sections of the site.
//
// The sections included in the component currently are as follows:
//   - [Intro] (The very first section of the site) <- path(./Intro/Intro.js)

import './app.css';
import Intro from './Intro/Intro';

function App() {
  return (
    <div className="App">
      <Intro />
    </div>
  );
}

export default App;