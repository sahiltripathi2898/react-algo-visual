import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Dijkstra from './components/path/PathfindingVisualizer';
import Sort from './components/sort/SortingVisualizer';

function App() {
  return (
    <Router>
      <div>
        <h1 style={{ padding: '30px', textAlign: 'center', fontSize: '50px' }}>
          React Algorithm Visualizer
        </h1>
        <div className="container" style={{ textAlign: 'center' }}>
          <Link to="/merge">
            <Button variant="info" style={{ margin: '10px' }}>
              Merge Sort
            </Button>
          </Link>
          <Link to="/dijkstra">
            <Button variant="info" style={{ margin: '10px' }}>
              Dijkstra
            </Button>
          </Link>
        </div>
      </div>
      <Switch>
        <Route exact path="/merge">
          <Sort />
        </Route>
        <Route exact path="/dijkstra">
          {' '}
          <Dijkstra />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
