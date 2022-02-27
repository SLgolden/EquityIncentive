import React from 'react';
import './App.css';
import Graph from './components/Graph';
import Description from './components/Description';

function App() {
    return (
        <section className="App">
            <section className="container">
                <h1>Equity Incentive Plan</h1>
                <Graph />
                <Description />
            </section>
        </section>
    );
}

export default App;
