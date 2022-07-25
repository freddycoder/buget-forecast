import { Simulation } from './features/mortgage/Simulation';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Income } from './features/income/Income';
import { Outcome } from './features/outcome/Outcome';
import { RenderSimulation } from './features/finalSimulation/RenderSimulation';
import { NavBar } from './NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
      </header>

      <main className="App-main">
        <article>
          <section>
            <Router>
              <Routes>
                <Route path="/" element={<Simulation></Simulation>} />
                <Route path="/hypotheque" element={<Simulation></Simulation>} />
                <Route path="/revenue" element={<Income></Income>} />
                <Route path="/depense" element={<Outcome></Outcome>} />
                <Route path="/simulation" element={<RenderSimulation></RenderSimulation>} />
              </Routes>
            </Router>
          </section>
        </article>
      </main>
    </div>
  );
}

export default App;
