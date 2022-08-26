import useData from '../../src/index';
import { Header, Footer } from './components';
import './App.css';

function App() {
  const state = useData({ count: 0 });

  return (
    <div className="App">
      <Header />

      <div className="card">
        <p>
          Click the button to test the <code>nsus</code>
        </p>
        <button onClick={() => state.count++}>count is {state.count}</button>
      </div>

      <Footer />
    </div>
  );
}

export default App;
