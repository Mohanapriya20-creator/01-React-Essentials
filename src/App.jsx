// fragment is a wrapper that allows us to return multiple elements
import { Fragment } from 'react';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';



function App() {
  return (
    //Fragment is a wrapper that allows us to return multiple elements
    <Fragment>
      <Header></Header>
      <main>
        <CoreConcepts></CoreConcepts>
        <Examples/>
      </main>
    </Fragment>
  );
}

export default App;
