
import './App.scss';
import { Counter, Effect, SizeListener } from './Hooks';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <h1>Hola!</h1>
      <Header></Header>
      <Effect></Effect>
      <Counter></Counter>
      <SizeListener></SizeListener>
    </div>
  );
}

export default App;
