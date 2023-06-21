import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from './Components/Calculator';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Calculator/>}/>
      </Routes>
      </div>
  );
}

export default App;
